  "use client"
  import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from "react-redux";
  import LoadingDocument from '@/app/components/partialView/loadingDocument';
  import { Bounce, toast } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import Link from 'next/link';

  import { UploadFiles } from '@/service/api/apiDocumentRequest';


  export default function UploadDocument() {
    const userId = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user?.userId);
    const dispatch = useDispatch();
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [hidden1, setHidden1] = useState(false);
    const [hidden2, setHidden2] = useState(false);
    const [files, setFiles] = useState<any[]>(JSON.parse(sessionStorage.getItem("sessionFiles") || "[]"));

    useEffect(() => {
      const storedFiles = JSON.parse(sessionStorage.getItem("sessionFiles") || "[]");
      setFiles(storedFiles);
      
      // Check if all files have completed: true
      const allCompleted = storedFiles.length > 0 && storedFiles.every((file: any) => file.completed === true);
      setIsSubmit(allCompleted);
    }, [isUploading,isSubmit]);
    
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
        type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      );
    };
  
    const handleFileUpload = async (file: File) => {
      if (isUploading) return;
    
      setIsUploading(true);
    
      const storedFiles = sessionStorage.getItem("sessionFiles");
      const parsedFiles = storedFiles ? JSON.parse(storedFiles) : [];
    
      const isFileAlreadyUploaded = parsedFiles.some(
        (f: any) => f.fileName === file.name && f.fileSize === file.size && f.fileLastModified === file.lastModified
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
    
      const newFile = {
        fileName: file.name,
        fileSize: file.size,
        fileLastModified: file.lastModified,
        idDocument: -1,
        progress: 0,
        completed: false,
      };
    
      parsedFiles.push(newFile);
      sessionStorage.setItem("sessionFiles", JSON.stringify(parsedFiles));
      setFiles(parsedFiles);
    
      const onUploadProgress = (progressEvent: any) => {
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    
        const updatedFiles = JSON.parse(sessionStorage.getItem("sessionFiles") || "[]").map((f: any) =>
          f.fileName === file.name ? { ...f, progress } : f
        );
        sessionStorage.setItem("sessionFiles", JSON.stringify(updatedFiles));
        setFiles(updatedFiles);
      };
    
      try {
        const document = await UploadFiles(file, userId, onUploadProgress);
    
        if (document && document.documentId) {
          const updatedFiles = JSON.parse(sessionStorage.getItem("sessionFiles") || "[]").map((f: any) =>
            f.fileName === file.name ? { ...f, completed: true, idDocument: document.documentId, progress: 100 } : f
          );
          sessionStorage.setItem("sessionFiles", JSON.stringify(updatedFiles));
          setFiles(updatedFiles);
        } else {
          throw new Error("Upload failed");
        }
      } catch (error) {
        console.error(`File upload failed: ${file.name}`);
        toast.error(`File upload failed: ${file.name}`, {
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
    
        handleFileDelete(-1, file.name);
      }
    
      setTimeout(() => setIsUploading(false), 1000);
      setIsSubmit(true);
    };
    
    const handleFileDelete = (idDocument: number, fileName?: string) => {
      const updatedFiles = files.filter((file) => file.idDocument !== idDocument && file.fileName !== fileName);
      setFiles(updatedFiles);
    
      if (updatedFiles.length === 0) {
        sessionStorage.removeItem("sessionFiles");
        setIsSubmit(false);
      } else {
        sessionStorage.setItem("sessionFiles", JSON.stringify(updatedFiles));
      }
    };
    
  
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
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
  
    return (
        <>
         <div className='max-w-[800px] m-auto'>
            <ul className=' flex gap-4 justify-between items-center mb-6'>
              <li className=' flex-1'>
                <div className=' text-center'>
                  <div className=' flex gap-2 justify-center items-center'>
                    <i className="fa-solid fa-circle-dot text-primary-upload-document"></i>
                    <span className=' text-lg font-bold text-primary-upload-document'>Upload</span>
                  </div>
                </div>
                <div className=' w-full py-1 rounded-md bg-primary-upload-document'></div>
              </li>
              <li className=' flex-1'>
                <div className=' text-center'>
                  <div className=' flex gap-2 justify-center items-center'>
                  <i className="fa-solid fa-circle-dot text-slate-300"></i>
                    <span className=' text-lg font-bold text-slate-300'>Details</span>
                  </div>
                </div>
                <div className=' w-full py-1 rounded-md bg-slate-300'></div>
              </li>
              <li className=' flex-1'>  
                <div className=' text-center'>
                  <div className=' flex gap-2 justify-center items-center'>
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
            <li key={index} className='flex flex-col shadow-lg rounded-2xl border-[1px] border-slate-300 gap-2 p-6 my-4'>
              <div className='flex w-full gap-4 items-center'>
                {file.completed ? (
                  <i className="fa-solid fa-circle-check text-green-500 text-xl"></i>
                ) : (
                  <i className="fa-solid fa-file-invoice text-slate-300 text-2xl"></i>
                )}
                <span className='text-base font-bold text-black'>{file.fileName}</span>
                <span className='text-sm font-normal text-slate-300'>
                  {(file?.fileSize / (1024 * 1024)).toFixed(2)} MB
                </span>
                {file.completed ? (
                  <i onClick={() => handleFileDelete(file.idDocument)} className="fa-solid fa-trash-can text-slate-400 ml-auto hover:cursor-pointer"></i>
                ) : (
                  <LoadingDocument />
                )}
              </div>
            </li>
          ))}
        </ul>
          </div>
          {isSubmit&&(
              <Link href="/document/upload/details" className=' ml-auto justify-center items-center w-fit flex gap-2 px-5 py-3 bg-primary-upload-document text-base text-white font-medium  rounded-3xl shadow-lg '>
              <span className=' font-semibold '>Upload Document</span>
              <i className="fa-solid fa-arrow-right text-white text-xl"></i>
              </Link>
          )}
        </>
    );
  }
