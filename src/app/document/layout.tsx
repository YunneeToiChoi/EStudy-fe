import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { FlipWords } from '@/components/ui/flip-words';

const wordss = ["lecture notes", "summaries", "mandatory assignments", "practice materials"];
const words = `Share study materials, achieve high scores on the TOEIC exam together and open up many new opportunities`;

const ExamLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
      <div className=' w-full min-h-full bg-white'>
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
          {children}
        </div>
      </div>
    </>
  );
};

export default ExamLayout;
