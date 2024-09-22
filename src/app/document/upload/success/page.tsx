import Image from "next/image"
import Link from "next/link"
export default function UploadSuccess(){
    return(
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
                  <i className="fa-solid fa-check text-primary-upload-document text-xl"></i>
                    <span className=' text-lg font-bold text-primary-upload-document'>Details</span>
                  </div>
                </div>
                <div className=' w-full py-1 rounded-md bg-primary-upload-document'></div>
              </li>
              <li className=' flex-1'>
                <div className=' text-center'>
                  <div className=' flex gap-2 justify-center items-center'>
                    <i className="fa-solid fa-check text-primary-upload-document text-xl"></i>
                    <span className=' text-lg font-bold text-primary-upload-document'>Done</span>
                  </div>
                </div>
                <div className=' w-full py-1 rounded-md bg-primary-upload-document'></div>
              </li>
            </ul>
        </div>
        <div className="w-full">
            <div className=" text-center w-full flex items-center justify-center">
                <Image src={"/img/HandsPhone.png"} alt="success" width={500}  height={500} quality={100} ></Image>
            </div>
            <div className="mt-14 flex flex-col gap-7 items-center justify-center">
                <h1 className=" text-4xl font-bold text-black">Thank You</h1>
                <span className="text-lg font-medium text-slate-300">Your document will help thousands of student to perform better in their studies</span>
                <Link href="/document/upload" className=" flex justify-center items-center gap-4 rounded-3xl bg-primary-upload-document shadow-md py-3 px-6 duration-150 ease-in-out hover:shadow-xl cursor-pointer">
                <i className="fa-solid fa-cloud-arrow-up text-xl group-hover:opacity-100 group-hover:duration-300 ease-linear text-white"></i>
                <span className=" text-base font-bold text-white">Upload more documents</span>
                </Link>
            </div>
        </div>
        </>
        
    )
}