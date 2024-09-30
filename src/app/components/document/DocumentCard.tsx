// components/DocumentCard.tsx

import Image from 'next/image';
import Link from 'next/link';

interface DocumentCardProps {
  document: {
    documentId: string;
    thumbnailUrl: string;
    categoryName: string;
    title: string;
    uploadDate: string;
  };
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  return (
    <Link key={document.documentId} href={`/document/${document.documentId}`} className="group w-fit m-auto">
      <div className="bg-white shadow-md border-2 border-slate-300 w-fit overflow-hidden transition transform hover:scale-105 hover:shadow-lg mx-auto">
        <div className="relative h-40 w-48 overflow-hidden bg-gray-100">
          <Image
            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:scale-110"
            width={1000}
            height={1000}
            quality={100}
            alt="Document Thumbnail"
            src={document.thumbnailUrl}
          />
          <div className="absolute top-0 right-0 bg-slate-300 text-black shadow-inner text-sm font-semibold px-2 py-1 rounded-bl-lg">
            {document?.categoryName}
          </div>
        </div>
        <div className="p-4 text-center border-[1px] border-t-slate-300">
          <h3 className="font-medium text-primary-bg-color group-hover:text-blue-600 transition w-40 truncate overflow-hidden whitespace-nowrap text-ellipsis">
            {document?.title}
          </h3>
          <div className="mt-2 flex gap-2 items-center">
            <i className="fa-regular fa-file-pdf text-lg text-red-600"></i>
            <p className="text-sm text-gray-500">
              {new Date(document?.uploadDate).toLocaleDateString('vi-VN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;
