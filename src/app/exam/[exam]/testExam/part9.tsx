import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

interface SelectedAnswers {
    [key: string]: {
        QuestionId: string;
        Answer: string;
        State: boolean; 
        AudioURL?: string;
    };
}

interface Part9Props {
    questionRefs: React.RefObject<{ [key: string]: HTMLDivElement | null }>;
    onAnswerChange: (questionId: string, answer: string) => void;
}

const Part9 = ({ questionRefs, onAnswerChange }: Part9Props) => {
    const part9 = useSelector((state: any) => state.ThunkReducer.exam.part9?.data?.part9Response);
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>(() => {
        const storedAnswers = JSON.parse(sessionStorage.getItem('answerTestPart9') || '{}');
        return storedAnswers;
    });
    
    const [isRecording, setIsRecording] = useState<{ [key: string]: boolean }>({});
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const audioChunks = useRef<Blob[]>([]);

    const handleRecordStart = async (questionId: string) => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);
            
            mediaRecorder.current.onstart = () => {
                setIsRecording(prev => ({ ...prev, [questionId]: true }));
                audioChunks.current = [];
            };

            mediaRecorder.current.ondataavailable = event => {
                audioChunks.current.push(event.data);
            };

            mediaRecorder.current.onstop = () => {
                setIsRecording(prev => ({ ...prev, [questionId]: false }));
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/mp3' });
                const audioUrl = URL.createObjectURL(audioBlob);

                // Save audio URL to state and sessionStorage for the specific question
                setSelectedAnswers(prevAnswers => {
                    const updatedAnswers = {
                        ...prevAnswers,
                        [questionId]: {
                            ...prevAnswers[questionId],
                            Answer: audioUrl
                        },
                    };
                    sessionStorage.setItem('answerTestPart9', JSON.stringify(updatedAnswers));
                    return updatedAnswers;
                });
                onAnswerChange(questionId, audioUrl);
            };

            mediaRecorder.current.start();
        }
    };

    const handleRecordStop = (questionId: string) => {
        if (mediaRecorder.current && isRecording[questionId]) {
            mediaRecorder.current.stop();
        }
    };

    useEffect(() => {
        setSelectedAnswers(JSON.parse(sessionStorage.getItem('answerTestPart9') || '{}'));
    }, []);

    if (!part9 || part9.isFetching) return <p>Loading...</p>;
    if (part9.error) return <p>Error loading part 9.</p>;

    return (
        <div>
            {part9?.map((item: any) => (
                <div
                    key={item.questionId}
                    ref={el => {
                        if (questionRefs.current) {
                            questionRefs.current[item.questionId] = el;
                        }
                    }}
                    className="question-item mt-11"
                >
                    <div className='flex items-center'>
                        <div className='flex-1'>
                            {item.questionImage && <Image width={400} height={400} quality={100} src={item.questionImage} alt={`Question ${item.number}`} />}
                        </div>
                        <div className='w-full flex gap-4 mt-5'>
                            <span className='aspect-square w-fit h-fit p-1 flex items-center justify-center bg-blue-200 text-black font-medium text-lg rounded-full'>{item.number}</span>

                            <div className="flex flex-col flex-1 text-lg">
                                <p>{item.questionText}</p>
                                <div className='flex mt-5 gap-2 w-full items-center'>
                                    <button
                                        onClick={() => isRecording[item.questionId] ? handleRecordStop(item.questionId) : handleRecordStart(item.questionId)}
                                        className={`p-3 ${isRecording[item.questionId] ? 'bg-red-500' : 'bg-green-500'} text-white rounded-md`}
                                    >
                                        {isRecording[item.questionId] ? 'Stop Recording' : 'Start Recording'}
                                    </button>

                                    {selectedAnswers[item.questionId]?.AudioURL && (
                                        <audio controls src={selectedAnswers[item.questionId].AudioURL} className='ml-4'>
                                            Your browser does not support the audio element.
                                        </audio>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Part9;
