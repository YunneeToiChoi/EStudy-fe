"use client"
import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Worker, Viewer, RenderPageProps, SpecialZoomLevel, DocumentLoadEvent } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FaDownload, FaExpand } from 'react-icons/fa';
import { previewDoc } from '@/service/api/apiDocumentRequest';
import Image from 'next/image';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import OrderDialog from "./dialogOrderDocument"
interface DetailDocsProps {
    params: { doc: string };
}

const ViewPdf: React.FC<DetailDocsProps> = ({ params }) => {
    const dispatch = useDispatch();
    const infoDetails = useSelector((state: any) => state.ThunkReducer.document.previewDoc.data);
    const fileUrl = infoDetails?.fileUrl;
    const idDocument = params.doc;

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(infoDetails?.price);
    useEffect(() => {
        if (idDocument) {
            previewDoc(idDocument, dispatch);
        }
    }, [dispatch, idDocument]);

    const handlePageChange = useCallback((currentPage: number) => {
        setCurrentPage(currentPage + 1); // Page numbers are 1-based
    }, []);

    const handleDocumentLoad = (e: DocumentLoadEvent) => {
        setTotalPages(e.doc.numPages); // Set total pages
    };

    const renderPage = (props: RenderPageProps) => {
        const { pageIndex } = props;
        const isDocumentPublic = infoDetails?.documentPublic;
        const canViewAll = isDocumentPublic;
        const totalPages = props.doc.numPages; // Lấy số trang của tài liệu
    
        // Kiểm tra điều kiện hiển thị dựa trên số trang
        let canViewPage = false;
        if (canViewAll) {
            canViewPage = true; // Nếu tài liệu công khai, cho xem toàn bộ
        } else if (totalPages < 3) {
            canViewPage = false; // Nếu ít hơn 3 trang, ẩn hết
        } else if (totalPages < 5) {
            canViewPage = pageIndex === 0; // Nếu ít hơn 5 trang, chỉ cho xem trang đầu tiên
        } else {
            canViewPage = pageIndex < 2; // Nếu từ 5 trang trở lên, cho xem 2 trang đầu
        }
    
        if (!canViewPage) {
            return (
                <div
                    key={pageIndex}
                    className="flex flex-col items-center w-full justify-center h-full"
                >
                    <div className="flex items-center gap-3">
                        <Image
                            className="nav__img"
                            src="/img/.svg/logo.svg"
                            alt="Logo"
                            width={80}
                            height={80}
                            quality={100}
                        />
                        <h1 className="text-2xl font-semibold tracking-wide">
                            E-<span className="text-primary-bg-color">Study</span>
                        </h1>
                    </div>
                    <div className="text-center my-4">
                        <p className="text-4xl font-extrabold my-4">
                            You&rsquo;re Reading a Preview
                        </p>
                        <p className="text-xl font-bold">
                            Buy document to download
                        </p>
                    </div>
                    <button className="z-10 flex items-center px-4 py-2 cursor-pointer bg-primary-bg-color text-white rounded-lg hover:bg-primary-bg-color-hover transition duration-200">
                        <FaDownload className="mr-2" /> Buy document
                    </button>
                </div>
            );
        }
    
        return (
            <div key={pageIndex} className="w-full h-full">
                {props.canvasLayer.children}
            </div>
        );
    };

    const fullScreenPluginInstance = fullScreenPlugin();
    const { EnterFullScreen } = fullScreenPluginInstance;

    return (
        <Fragment>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="flex bg-gray-50">
                    <nav className=" max-w-80 bg-white p-4 shadow-md">
                        <div className="sticky z-10 top-36 left-2">
                            <div className="flex mb-8 items-center gap-11 mx-2">
                                <div className="flex items-center gap-4">
                                    <i className="fa-regular fa-thumbs-up text-sm text-slate-400"></i>
                                    <div className="text-sm flex items-center gap-1 text-slate-400">
                                        <span>0</span>
                                        <span>rating</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-download text-sm text-slate-400"></i>
                                    <div className="text-sm flex items-center gap-1 text-slate-400">
                                        <span>{infoDetails?.downloadCount}</span>
                                        <span>downloads</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                            <h1 className="text-2xl font-bold">{infoDetails?.title}</h1>
                            {
                                infoDetails?.documentPublic == true ? (
                                    <p className=" text-white text-base font-medium py-1 px-2 rounded-xl bg-primary-bg-color-hover">Free</p>
                                ):(
                                    <p className="ml-2 underline text-primary-bg-color text-sm font-semibold ">
                                    {formattedPrice}
                                  </p>
                                )
                            }
                            </div>
                            <p className="text-base text-slate-400 my-5">
                                Uploaded by <span className="text-primary-bg-color">{infoDetails?.user?.userName}</span> on{' '}
                                <span className="text-primary-bg-color">
                                    {new Date(infoDetails?.uploadDate).toLocaleDateString('vi-VN', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </span>
                            </p>
                            <div className="mb-5 rounded-xl p-5 bg-blue-100">
                                <div className="my-2 flex items-center gap-2">
                                    <Image
                                        className="rounded-full"
                                        src={infoDetails?.user?.userImage}
                                        alt="Logo"
                                        width={50}
                                        height={50}
                                        quality={100}
                                    />
                                    <p className="overflow-hidden text-ellipsis text-sm">
                                        {infoDetails?.user?.userEmail}
                                    </p>
                                </div>
                                <div className="flex items-center justify-around">
                                    <div className="flex gap-1 flex-col">
                                        <span className="text-2xl font-bold text-center">
                                            {infoDetails?.userDocumentCount}
                                        </span>
                                        <div className="underline flex gap-2 items-center text-slate-400 text-lg">
                                            <span>Upload</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 flex-col">
                                        <span className="text-2xl font-bold text-center">
                                            {infoDetails?.userDownloadCount}
                                        </span>
                                        <div className="underline flex gap-2 items-center text-slate-400 text-lg">
                                            <span>Download</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold">Description:</h1>
                                <p className="text-md text-primary-bg-color p-2 whitespace-pre-wrap break-words">
                                    {infoDetails?.documentDescription}
                                </p>
                            </div>
                        </div>
                    </nav>

                    <div className="flex-1">
                        <div className="h-full border border-gray-300 rounded-lg bg-white shadow-lg">
                            <div className="flex py-6 px-16 shadow-2xl w-full justify-between items-center bg-gray-100">
                                <OrderDialog documentDes={infoDetails?.documentDescription} documentId={infoDetails?.documentId} documentName={infoDetails?.title} documentPrice={infoDetails?.price} documentPublic={infoDetails?.documentPublic}></OrderDialog>
                                {totalPages && (
                            <div className="text-center">
                                Page {currentPage} of {totalPages}
                            </div>
                        )}
                                <EnterFullScreen>
                                    {(props) => (
                                        <button
                                            className="flex items-center px-4 py-2 text-slate-400 hover:text-black transition duration-300"
                                            onClick={props.onClick}
                                        >
                                            <FaExpand className="mr-2" /> Full Screen
                                        </button>
                                    )}
                                </EnterFullScreen>
                            </div>
                            <div className='h-[calc(100vh-210px)]'>
                            {fileUrl ? (
                                <Viewer
                                    fileUrl={fileUrl}
                                    renderPage={renderPage}
                                    defaultScale={SpecialZoomLevel.PageFit}
                                    onPageChange={(e) => {
                                        console.log('Current Page Index:', e.currentPage); // Kiểm tra chỉ số trang
                                        handlePageChange(e.currentPage);
                                    }}
                                    onDocumentLoad={handleDocumentLoad}
                                    plugins={[fullScreenPluginInstance]}
                                />
                            ) : (
                                <div className="p-4 text-center text-gray-500">Đang tải tài liệu...</div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </Worker>
        </Fragment>
    );
};

export default ViewPdf;
