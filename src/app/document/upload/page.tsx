"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LoadingDocument from '@/app/components/partialView/loadingDocument';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { FlipWords } from '@/components/ui/flip-words';
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const wordss = ["lecture notes", "summaries", "mandatory assignments", "practice materials"];
const words = `Share study materials, achieve high scores on the TOEIC exam together and open up many new opportunities`;

interface UploadedFile {
  file: File;
  progress: number;
  completed: boolean;
}

export default function UploadDocument() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [hidden1, setHidden1] = useState(false);
  const [hidden2, setHidden2] = useState(false);

  useEffect(() => {
    if (isDragging) {
      setHidden2(false);
      setTimeout(() => setHidden1(true), 100);  
    } else {
      setHidden1(false);
      setTimeout(() => setHidden2(true), 100);
      
    }
  }, [isDragging]);

const typeValidation = (type: string) => {
  return (
    type === "application/pdf" ||
    type === "application/msword" ||
    type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
};

const handleFileUpload = async (file: File) => {
  if (isUploading) {
    return;
  }

  setIsUploading(true); 

  const isFileAlreadyUploaded = files.some(
    (f) =>
      f.file.name === file.name &&
      f.file.size === file.size &&
      f.file.lastModified === file.lastModified
  );

  if (isFileAlreadyUploaded) {
    toast.error("File đã tồn tại!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setIsUploading(false);
    return;
  }

  const newFile: UploadedFile = {
    file,
    progress: 0,
    completed: false,
  };

  setFiles((prevFiles) => [newFile, ...prevFiles]);

  const simulateUploadProgress = async (file: UploadedFile) => {
    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        setFiles((prevFiles) => {
          const updatedFiles = prevFiles.map((f) => {
            if (f.file.name === file.file.name) {
              const newProgress = f.progress + 10;
              if (newProgress >= 100) {
                clearInterval(interval);
                console.log("Upload complete:", file.file.name);
                return { ...f, progress: 100, completed: true };
              }
              console.log("Progress:", newProgress, "File:", file.file.name);
              return { ...f, progress: newProgress };
            }
            return f;
          });
          console.log("Updated files list:", updatedFiles);
          return updatedFiles;
        });
      }, 500);
  
      setTimeout(() => {
        clearInterval(interval);
        setFiles((prevFiles) => {
          return prevFiles.map((f) => {
            if (f.file.name === file.file.name && !f.completed) {
              return { ...f, progress: 100, completed: true };
            }
            return f;
          });
        });
        resolve();
      }, 5000);
    });
  };

  await simulateUploadProgress(newFile);
  setTimeout(() => setIsUploading(false), 1000);
};

const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  console.log("sdsada")
  e.preventDefault();
  e.stopPropagation();
  setIsDragging(true);
};

const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragging(false);
};

const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragging(false);
  if (e.dataTransfer.files) {
    Array.from(e.dataTransfer.files).forEach((file) => {
      if (typeValidation(file.type)) {
          handleFileUpload(file);
      } else {
        toast.error('File không đúng định dạng!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    });
  }
};

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.files);
  if (e.target.files) {
    Array.from(e.target.files).forEach((file) => {
      if (typeValidation(file.type)) {
        handleFileUpload(file);
      } else {
        toast.error("File không đúng định dạng!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    });
    e.target.value = '';
  }
};

const handleFileDelete = (fileName: string) => {
  setFiles((prevFiles) =>
    prevFiles.filter((file) => file.file.name !== fileName)
  );
};
  return (
    <>
      <header className=' w-full sticky z-20 top-0 bg-[#f6f7fb] flex justify-center items-center px-4 py-2'>
        <div>
          <Link className='flex gap-2 items-center' href="/">
            <Image
              className="nav__img"
              src="/img/.svg/logo_document.svg"
              alt="Logo"
              width={60}
              height={60}
              quality={100}
            />
            <h1 className='text-[25px] font-semibold tracking-wide'>
              E-<span className='text-primary-upload-document'>Study</span>
            </h1>
          </Link>
        </div>
      </header>
      <div className=' w-full min-h-screen bg-white'>
        <div className='bg-[#f6f7fb] py-4'>
          <div className=" flex flex-col justify-center content-center">
            <h1 className=" text-3xl font-semibold text-center">Share your
              <span className=" text-primary-bg-color">
                <FlipWords className="text-primary-upload-document" words={wordss} />
              </span>
            </h1>
            <div className=" text-center font-normal mt-4">
              <TextGenerateEffect words={words} />
            </div>
          </div>
        </div>
        <div className=' mx-60 px-4 py-8 '>
          <div className='max-w-[800px] m-auto'>
            <ul className=' flex gap-4 justify-between items-center mb-6'>
              <li className=' flex-1'>
                <div className=' text-center'>
                  <div className=' flex gap-2 justify-center items-center'>
                    <i className="fa-solid fa-circle-dot text-primary-upload-document opacity-60"></i>
                    <span className=' text-lg font-bold text-primary-upload-document'>Upload</span>
                  </div>
                </div>
                <div className=' w-full py-1 rounded-md bg-primary-upload-document'></div>
              </li>
              <li className=' flex-1'>
                <div className=' text-center'>
                  <div className=' flex gap-2 justify-center items-center'>
                    <i className="fa-solid fa-check text-primary-upload-document text-xl"></i>
                    <span className=' text-lg font-bold text-slate-300'>Details</span>
                  </div>
                </div>
                <div className=' w-full py-1 rounded-md bg-slate-300'></div>
              </li>
              <li className=' flex-1'>
                <div className=' text-center'>
                  <div className=' flex gap-2 justify-center items-center'>
                    <i className="fa-solid fa-circle-dot text-slate-300"></i>
                    <span className=' text-lg font-bold text-slate-300'>Done</span>
                  </div>
                </div>
                <div className=' w-full py-1 rounded-md bg-slate-300'></div>
              </li>
            </ul>
          </div>
            <label>
            <div className={`relative w-full hover:cursor-pointer group p-11 rounded-3xl bg-[#f1f7fe] shadow-xl shadow-blue-300/50 ${isUploading ? 'pointer-events-none opacity-50' : ''}`}>
            <div onDrop={handleDrop}
             onDragOver={handleDragOver}
             onDragLeave={handleDragLeave}
              className={`flex justify-center p-8 border-dashed border-[3px] border-[#aad2ff] rounded-3xl items-center ${isUploading ? 'pointer-events-none' : ''}`}>
              <div className={`flex text-5xl duration-200 font-extrabold text-primary-upload-document text-center justify-center items-center flex-col min-h-64 gap-6 scale-100 pointer-events-none ${hidden1 ? '' : 'hidden'}`}>
                DROP HERE
              </div>
              <div className={`flex flex-col justify-start min-h-64 gap-6 items-center duration-200 ${!hidden2 ? 'invisible opacity-0 scale-110 pointer-events-none' : ''} ${hidden1 ?'hidden':''}`}>
                <div className=" flex flex-col m-auto justify-center items-center gap-2">
                  <i className="fa-solid fa-cloud-arrow-up text-5xl group-hover:opacity-100 group-hover:duration-300 ease-linear opacity-50 text-primary-upload-document"></i>
                  <span className=' text-4xl font-bold'>Drag & Drop files</span>
                </div>
                <div className=' flex flex-col justify-center items-center gap-3'>
                  <span className="name-file text-slate-400 text-center leading-[24px]">Or if you prefer</span>
                  <div className="bg-primary-upload-document rounded-3xl flex justify-center hover:shadow-md duration-150 items-center hover:bg-blue-500 transition hover:duration-150 delay-75 ease-linear">
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      multiple
                    />
                    <h1 className=" px-6 py-2 text-center font-medium text-lg text-white">Browse my files</h1>
                  </div>
                  <span className="name-file text-slate-400 text-center leading-[24px]">Supported files: pdf, doc, docx</span>
                </div>
              </div>
            </div>
          </div>
        </label>
          <div>
          <ul className='w-full mt-11'>
            {files.map((file, index) => (
                <li key={index} className='flex flex-col gap-2 my-4'>
                <div className='flex w-full gap-4 items-center'>
                    {file.completed ? (
                    <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                    ) : (
                    <i className="fa-solid fa-file-invoice text-slate-300 text-2xl"></i>
                    )}
                    <span className='text-base font-bold text-black'>{file.file.name}</span>
                    {file.completed ? (
                    <i  onClick={() => handleFileDelete(file.file.name)} className="fa-solid fa-trash-can text-slate-400 ml-auto hover:cursor-pointer"></i>
                    ) : (
                    <LoadingDocument />
                    )}
                </div>
                <div className='flex w-full gap-2 items-center'>
                    <span className='text-sm font-normal text-slate-300'>
                    {(file.file.size / (1024 * 1024)).toFixed(2)} MB
                    </span>
                    <div className='relative flex-1 py-[3px] rounded-md bg-slate-300 overflow-hidden'>
                    <div className='absolute top-0 left-0 h-full bg-slate-300 w-full'></div>
                    <div
                        className={`absolute top-0 left-0 h-full bg-green-500`}
                        style={{
                        width: `${file.progress}%`,
                        transition: 'width 0.5s ease',
                        }}
                    ></div>
                    </div>
                    <span className='text-sm font-normal text-slate-300'>
                    {file.completed ? '100%' : `${file.progress}%`}
                    </span>
                </div>
                </li>
            ))}
        </ul>
          </div>
        </div>
      </div>
    </>
  );
}
