import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaMicrophone, FaStop } from 'react-icons/fa'; // Import icons from Font Awesome
import * as request from "@/lib/utils/request";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import LoadingContent from '@/app/components/partialView/loadingContent';
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
    const part9Questions = part9.slice(0, 5);
    const lastIndex = part9Questions.length;

    const [isRecording, setIsRecording] = useState<{ [key: string]: boolean }>({});
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const audioChunks = useRef<Blob[]>([]);
    const [followUpQuestion, setFollowUpQuestion] = useState<string>('');
    const [isLoadingFollowUp, setIsLoadingFollowUp] = useState<boolean>(false); // AI loading state
    const handleRecordStart = async (questionId: any) => {
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

            mediaRecorder.current.onstop = async () => {
                setIsRecording(prev => ({ ...prev, [questionId]: false }));
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/mp3' });
                const audioUrl = URL.createObjectURL(audioBlob);

                // Only save to sessionStorage if questionId is not '7'
                if (questionId === '7') {
                    const followUpData = {
                        AudioURL: audioUrl,
                        followUpQuestion,
                    };
                    sessionStorage.setItem('answerQuestion7', JSON.stringify(followUpData));
                } else {
                    // Save other answers in answerTestPart9
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
                }

                // If last question, call follow-up logic
                if (questionId === part9[lastIndex].questionId) {
                    setIsLoadingFollowUp(true); // Set loading state
                    const followUp = await sendAudioToEndpoint(audioBlob, questionId);
                    setFollowUpQuestion(followUp?.aiResponse?.followUpQuestion);
                    setIsLoadingFollowUp(false); // End loading state
                }
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

    const sendAudioToEndpoint = async (audioBlob: Blob, questionId: string) => {
        const formData = new FormData();
        formData.append("audioFile", audioBlob, `audio_${questionId}.wav`);
        formData.append("questionId", questionId);

        try {
            const response = await request.post(`/Speaking/EvaluateQuestionSix/${questionId}`, formData);
            return response;
        } catch (error) {
            console.error('Error sending audio:', error);
        }
    };

    useEffect(() => {
        setSelectedAnswers(JSON.parse(sessionStorage.getItem('answerTestPart9') || '{}'));
    }, []);

    if (!part9 || part9.isFetching) return <p>Loading...</p>;
    if (part9.error) return <p>Error loading part 9.</p>;

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            {part9Questions?.map((item: any) => (
                <div
                    key={item.questionId}
                    ref={el => {
                        if (questionRefs.current) {
                            questionRefs.current[item.questionId] = el;
                        }
                    }}
                    className="question-item mt-6 p-4 bg-white px-7 shadow-sm py-11 rounded-2xl "
                >
                    <div className='w-full'>
                        <div className="flex items-center justify-between gap-4 text-lg mt-4">
                            <span className='aspect-square w-fit h-fit p-1 flex items-center justify-between bg-blue-200 text-black font-medium text-lg rounded-full'>{item.number}</span>
                            <p className='ml-11 mr-auto'>{item.questionText}</p>
                            <button
                                onClick={() => isRecording[item.questionId] ? handleRecordStop(item.questionId) : handleRecordStart(item.questionId)}
                                className={`flex items-center rounded-full p-5 ${isRecording[item.questionId] ? 'bg-red-600' : 'bg-primary-bg-color'} text-white transition-colors duration-200 hover:opacity-80`}
                            >
                                {isRecording[item.questionId] ? <FaStop /> : <FaMicrophone />}
                            </button>
                        </div>
                        <div className='flex justify-center mt-4 gap-4 items-center'>
                            {selectedAnswers[item.questionId]?.Answer && (
                                <audio controls src={selectedAnswers[item.questionId].Answer} className='ml-4'>
                                    Your browser does not support the audio element.
                                </audio>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {/* Follow-up question */}
            <div
                key={part9[lastIndex].questionId}
                ref={el => {
                    if (questionRefs.current) {
                        questionRefs.current[part9[lastIndex].questionId] = el;
                    }
                }}
                className="question-item mt-6 p-4 bg-white px-7 shadow-sm py-11 rounded-2xl "
            >
                <div className='w-full'>
                    <span className='flex items-center gap-2 text-base text-primary-bg-color'><span>conversation</span><i className="fa-solid fa-comment text-2xl"></i></span>
                    {!followUpQuestion && !isLoadingFollowUp && (
                        <div className="flex items-center justify-between gap-4 text-lg mt-4">
                            <div>
                                <span className='aspect-square w-fit h-fit p-1 flex items-center justify-between bg-blue-200 text-black font-medium text-lg rounded-full'>{part9[lastIndex].number}</span>
                            </div>
                            <p className='ml-11 mr-auto'>{part9[lastIndex].questionText}</p>
                            <button
                                onClick={() => isRecording[part9[lastIndex].questionId] ? handleRecordStop(part9[lastIndex].questionId) : handleRecordStart(part9[lastIndex].questionId)}
                                className={`flex items-center rounded-full p-5 ${isRecording[part9[lastIndex].questionId] ? 'bg-red-600' : 'bg-primary-bg-color'} text-white transition-colors duration-200 hover:opacity-80`}
                            >
                                {isRecording[part9[lastIndex].questionId] ? <FaStop /> : <FaMicrophone />}
                            </button>
                        </div>
                    )}
                    {isLoadingFollowUp && (
                        <div className="mt-6 flex items-center">
                          < LoadingContent></LoadingContent>
                        </div>
                    )}
                    {followUpQuestion && (
                        <div className="mt-6 flex items-center justify-between">
                            <div>    
                            <TextGenerateEffect className='font-normal text-base' words={followUpQuestion} />
                           </div>
                       
                            <button
                                onClick={() => isRecording['7'] ? handleRecordStop('7') : handleRecordStart('7')}
                                className={`flex items-center rounded-full text-lg p-5 ${isRecording['7'] ? 'bg-red-600' : 'bg-primary-bg-color'} text-white transition-colors duration-200 hover:opacity-80`}
                            >
                                {isRecording['7'] ? <FaStop /> : <FaMicrophone />}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Part9;
