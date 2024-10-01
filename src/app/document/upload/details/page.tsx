"use client";

import { ComboboxDemo } from "./courseSelect";
import { SelectDemo } from "./cateSelect";
import { Input } from "@/components/ui/inputSelect";
import { SwitchDemo } from "./publicCheck";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { editDocument } from "@/service/api/apiDocumentRequest";
import { GetCategoryOfDocuments } from "@/service/api/apiDocumentRequest";
import { GetCourseOfDocuments } from "@/service/api/apiDocumentRequest";
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
interface DocumentInfo {
  idDocument: number;
  fileName: string;
  fileSize: number;
  fileLastModified: number;
  completed: boolean;
  progress: number;
}

interface DocumentDetails {
  idDocuments: number; 
  userId: string;       
  categoryId: number;   
  courseId: number;      
  title: string;
  description: string;
  price: string;
  isPublic: boolean;
}

export default function UploadDetail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const [documents, setDocuments] = useState<DocumentInfo[]>([]);
  const [documentDetails, setDocumentDetails] = useState<DocumentDetails[]>([]);
  const [errors, setErrors] = useState<{ [key: number]: { [key: string]: string } }>({});
  const userId = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user?.userId);
  const storedDocuments = sessionStorage.getItem("sessionFiles");
  const listCate = useSelector(
    (state: any) => state.ThunkReducer.document.cateOfDocuments.data?.category
  );
  const listCourse = useSelector(
    (state: any) => state.ThunkReducer.document.courseOfDocuments.data?.course
  );

  useEffect(() => {
    if(!user){
      toast.error("Please login to upload document", {
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
      router.push('/login');
    }
    else if (storedDocuments) {
      const parsedDocuments = JSON.parse(storedDocuments);
      setDocuments(parsedDocuments);
      setDocumentDetails(parsedDocuments.map((doc: DocumentInfo) => ({
        idDocuments: doc.idDocument, 
        userId: userId,             
        categoryId: null,               
        courseId: null,                
        title: doc.fileName,
        description: "",
        price: "",
        isPublic: false,
      })));
      GetCategoryOfDocuments(dispatch);
      GetCourseOfDocuments({ userId: userId }, dispatch);
    }
    else{
      toast.error("No documents have been uploaded yet!", {
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
      router.push("/document/upload");
    }
  }, [dispatch,userId,user,storedDocuments,router]);

  const formatPrice = (value: string) => {
    // Chuyển giá trị thành số và định dạng lại với dấu chấm
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

const handleDetailChange = (index: number, field: keyof DocumentDetails, value: string | boolean | number) => {
  if (field === 'price') {
    // Chỉ giữ lại các ký tự số
    const numericValue = value.toString().replace(/[^0-9]/g, '');

    // Cập nhật giá trị với định dạng có dấu chấm
    const formattedValue = formatPrice(numericValue);

    setDocumentDetails((prev) => {
      const newDetails = [...prev];
      newDetails[index] = { ...newDetails[index], [field]: formattedValue };
      return newDetails;
    });
  } else {
    setDocumentDetails((prev) => {
      const newDetails = [...prev];
      newDetails[index] = { ...newDetails[index], [field]: value };
      return newDetails;
    });
  }

  setErrors((prev) => ({
    ...prev,
    [index]: {
      ...prev[index],
      [field]: "",
    },
  }));
};

const validateData = () => {
  const newErrors: { [key: number]: { [key: string]: string } } = {};
  let isValid = true;

  documentDetails.forEach((details, index) => {
    console.log("Current details:", details); // Log giá trị hiện tại
    const fieldErrors: { [key: string]: string } = {};

    if (!details.courseId) {
      fieldErrors.course = "Course is required";
      isValid = false;
    }
    if (!details.categoryId) {
      fieldErrors.category = "Category is required";
      isValid = false;
    }
    if (!details.title) {
      fieldErrors.title = "Title is required";
      isValid = false;
    } else if (details.title.length > 20) {
      fieldErrors.title = "Title must be less than 20 characters";
      isValid = false;
    }
    if (!details.description) {
      fieldErrors.description = "Description is required";
      isValid = false;
    } else if (details.description.length > 100) {
      fieldErrors.description = "Description must be less than 100 characters";
      isValid = false;
    }
    if (!details.price && !details.isPublic) {
      fieldErrors.price = "Price is required";
      isValid = false;
    } else if (parseInt(details.price) < 10.000 && !details.isPublic) {
      fieldErrors.price = "Price must be at least 10.000";
      isValid = false;
    }

    if (Object.keys(fieldErrors).length > 0) {
      newErrors[index] = fieldErrors;
    }
  });

  setErrors(newErrors);
  return isValid;
};

  const handleSubmit = async () => {
    if (validateData()) {
      const errors:any = [];
      try {
        await Promise.all(documents.map(async (doc, index) => {
          try {
            await editDocument(
              {
                idDocuments: [doc.idDocument],
                userId: userId,
                categoryId: documentDetails[index].categoryId ? parseInt(documentDetails[index].categoryId.toString(), 10) : null,
                courseId: documentDetails[index].courseId ? parseInt(documentDetails[index].courseId.toString(), 10) : null,
                state: documentDetails[index].isPublic,
                title: documentDetails[index].title,
                price: documentDetails[index].isPublic ? -1 : parseFloat(documentDetails[index].price.replace(/\./g, '')),
                description: documentDetails[index].description,
              },
              dispatch
            );
          } catch (error:any) {
            errors[index] = error.response?.data || "Error uploading document";
          }
        }));
  
        if (errors.length === 0) {
          sessionStorage.removeItem("sessionFiles");
          router.push("/document/upload/success");
        } else {
          const errorMessage = errors.filter(Boolean).map((error:any, index:any) => `Document ${index + 1}: ${error}`).join("\n");
          alert(`Some documents failed to upload:\n${errorMessage}`);
        }
      } catch (error) {
        console.error("Error submitting documents:", error);
      }
    }
  };

  return (
    <div className="max-w-[800px] m-auto">
     {documents.length === 0 ? (
      <div></div>):(
        <>
         <div className='max-w-[800px] m-auto'>
        <ul className=' flex gap-4 justify-between items-center mb-6'>
          <li className=' flex-1'>
            <div className=' text-center'>
              <div className=' flex gap-2 justify-center items-center'>
                <i className="fa-solid fa-check text-primary-upload-document text-xl"></i>
                <span className=' text-lg font-bold text-primary-upload-document'>Upload</span>
              </div>
            </div>
            <div className=' w-full py-1 rounded-md bg-primary-upload-document'></div>
          </li>
          <li className=' flex-1'>
            <div className=' text-center'>
              <div className=' flex gap-2 justify-center items-center'>
                <i className="fa-solid fa-circle-dot text-primary-upload-document"></i>
                <span className=' text-lg font-bold text-primary-upload-document'>Details</span>
              </div>
            </div>
            <div className=' w-full py-1 rounded-md bg-primary-upload-document'></div>
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
      <div className="w-full">
        {documents.length > 0 ? (
          documents.map((doc, index) => (
            <ul key={doc.idDocument} className="w-full gap-9 flex flex-col justify-center items-center ">
              <li className="mt-10 w-full shadow-md px-8 py-11 min-h-72 border-[1px] border-slate-300 rounded-3xl">
                <div className="flex items-center gap-6"> 
                  <i className="fa-solid fa-file-lines text-4xl text-primary-upload-document"></i> 
                  <div>
                    <h3 className="text-lg font-semibold">{doc.fileName}</h3>
                    <p className="text-sm text-gray-500">
                      Size: {(doc.fileSize / 1024).toFixed(2)} KB
                    </p>
                    <p className="text-sm text-gray-500">
                      Last Modified: {new Date(doc.fileLastModified).toLocaleString()}
                    </p>
                  </div>
                </div>
                <ul className="mt-7 flex flex-col gap-8 justify-center items-start">
                  <li className="w-full flex gap-2">
                    <div className="flex min-w-28 gap-2 justify-start items-center">
                      <i className="fa-solid fa-graduation-cap text-lg text-slate-400"></i>
                      <span className="text-base font-semibold text-slate-400">Course</span>
                    </div>
                    <div className="justify-end items-center w-full">
                    <ComboboxDemo
                    onCourseSelect={(value) => handleDetailChange(index, 'courseId', value)} 
                    listCourse={listCourse}
                    />
                      {errors[index]?.course && <p className="text-red-500 text-sm pt-2">{errors[index].course}</p>}
                    </div>
                  </li>
                  <li className="w-full flex gap-2">
                    <div className="flex min-w-28 gap-2 justify-start items-center">
                      <span className="text-base font-semibold text-slate-400">Category :</span>
                    </div>
                    <div className="justify-end items-center w-full">
                    <SelectDemo
                      onCategorySelect={(value) => handleDetailChange(index, 'categoryId', value)} 
                      listCate={listCate} 
                    />
                      {errors[index]?.category && <p className="text-red-500 text-sm pt-2">{errors[index].category}</p>}
                    </div>
                  </li>
                  <li className="w-full flex gap-2">
                    <div className="flex min-w-28 gap-2 justify-start items-center">
                      <span className="text-base font-semibold text-slate-400">Title :</span>
                    </div>
                    <div className="justify-end items-center w-full">
                      <Input
                        className="py-5"
                        value={documentDetails[index]?.title}
                        onChange={(e) => handleDetailChange(index, 'title', e.target.value)}
                      />
                      {errors[index]?.title && <p className="text-red-500 text-sm pt-2">{errors[index].title}</p>}
                    </div>
                  </li>
                  <li className="w-full flex gap-2">
                    <div className="flex min-w-28 gap-2 justify-start items-center">
                      <span className="text-base font-semibold text-slate-400">Description :</span>
                    </div>
                    <div className="justify-end items-center w-full">
                      <textarea
                        placeholder="Please give as much additional information as possible"
                        className="max-h-96 min-h-24 w-full border-[1px] border-slate-200 p-5 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-upload-document"
                        value={documentDetails[index]?.description}
                        onChange={(e) => handleDetailChange(index, 'description', e.target.value)}
                      ></textarea>
                      {errors[index]?.description && <p className="text-red-500 text-sm pt-2">{errors[index].description}</p>}
                    </div>
                  </li>
                  <li className="w-full flex gap-2">
                    <SwitchDemo checked={documentDetails[index].isPublic}
                     onCheckedChange={(checked) => handleDetailChange(index, 'isPublic', checked)} />
                    <div className="ml-auto flex justify-center items-center gap-3">
                      <span className="text-base font-medium text-slate-400">Prices</span>
                      <Input
                        placeholder="VND"
                        type="text"
                        value={documentDetails[index]?.price || ''}
                        onChange={(e) => handleDetailChange(index, 'price', e.target.value)}
                        disabled={documentDetails[index].isPublic}
                      />
                      {errors[index]?.price && <p className="text-red-500 text-sm">{errors[index].price}</p>}
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          ))
        ) : (
          <div className="text-center">No documents found in session storage.</div>
        )}
      </div>
     <div className=" mt-9 flex w-full justify-between items-center">
     <Link
        href={"/document/upload"}
        className=" w-24  text-center bg-primary-upload-document text-white px-4 py-2 rounded-md hover:bg-primary-upload-document-dark"
      >
       previous
      </Link>
      <button
        onClick={handleSubmit}
        className=" w-24  text-center bg-primary-upload-document text-white px-4 py-2 rounded-md hover:bg-primary-upload-document-dark"
      >
       Next
      </button>
     </div>
        </>
      )
    }
    </div>
  );
}
