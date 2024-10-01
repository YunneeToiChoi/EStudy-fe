"use client";
import React, { Fragment, useState, useCallback } from 'react'; 
import { Worker, Viewer, RenderPageProps, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FaDownload } from 'react-icons/fa';

export default function ViewPdf() {
    const [fileUrl] = useState("https://firebasestorage.googleapis.com/v0/b/estudy-426108.appspot.com/o/UserDocuments%2F8b53f27b-6bb2-494e-937d-f19d861e9c5e%2FTUAN%2005%20-%20CHUONG%202_PHAN%20TICH%20YEU%20CAU_MO%20HINH%20HOA%20ERD%20%281%29.pdf?alt=media");
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = useCallback((currentPage: number) => {
        setCurrentPage(currentPage);
    }, []);

    const renderPage = (props: RenderPageProps) => {
        // Kiểm tra xem trang hiện tại có phải là trang đầu hoặc trang lẻ không
        const isBlurred  = (props.pageIndex + 1) % 2 === 1; // Trang lẻ (1, 3, 5,...)

        return (
            <div className={`w-full h-full ${isBlurred ? 'filter blur-sm' : ''}`}>
            {props.canvasLayer.children}
        </div>
        );
    };

    return (
        <Fragment>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="flex h-screen bg-gray-50">
                    {/* Thông tin người dùng bên trái */}
                    <nav className="w-1/4 bg-white p-4 shadow-md">
                        <h2 className="font-bold text-xl mb-4">Thông tin người đăng</h2>
                        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
                            <h3 className="font-bold text-lg">Uploaded by:</h3>
                            <div className="flex items-center mb-2">
                                <span className="bg-green-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-800">NI</span>
                                <p className="ml-2 font-bold">nahhhh it</p>
                            </div>
                            <p className="text-sm">🏛 TRƯỜNG ĐẠI HỌC CÔNG NGHỆ...</p>
                            <p className="text-sm">0 Followers</p>
                            <p className="text-sm">4 Uploads</p>
                            <p className="text-sm">0 Upvotes</p>
                            <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">+ Follow</button>
                        </div>
                    </nav>

                    {/* Phần hiển thị PDF bên phải */}
                    <div className="flex-1 p-4 overflow-auto">
                        <div className="h-full border border-gray-300 rounded-lg bg-white shadow-lg">
                            <div className="flex justify-between items-center p-4 bg-gray-100">
                                <h1 className="text-2xl font-bold">Xem Tài Liệu PDF</h1>
                                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                                    <FaDownload className="mr-2" /> Tải về
                                </button>
                            </div>
                            <Viewer
                                initialPage={0}
                                fileUrl={fileUrl} 
                                renderPage={renderPage} 
                                defaultScale={SpecialZoomLevel.PageFit}
                                withCredentials={false}
                                enableSmoothScroll={true}
                                onPageChange={(e) => handlePageChange(e.currentPage)}
                            />
                        </div>
                    </div>
                </div>
            </Worker>
        </Fragment>
    );
}
