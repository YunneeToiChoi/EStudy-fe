"use client"
import React from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import  Link  from 'next/link';

export default function Footer() {
    const pathname = usePathname();

    // Định nghĩa các route cần ẩn footer
    const hiddenRoutes = ['/course/courseOption/courseLearn','/course/courseOption/courseVocabulary','/course/courseOption/courseGrammar'];

    // Kiểm tra nếu pathname thuộc các route cần ẩn
    if (hiddenRoutes.includes(pathname)) {
        return null; // Không render footer
    }

    return(
        <footer className="mt-14 py-9 border-t-[1px] border-t-[#e7eaf3] px-[20px] w-full bg-primary-bg-color">
            <div className="">
                <div className="grid grid-cols-5 gap-8">
                    <div className="flex flex-col items-center gap-3">
                        <Image
                            width={80}
                            height={80}
                            src="/img/.svg/logo_white.svg"
                            alt=""
                        />
                        <p className="text-sm font-semibold">© 2024</p>
                        <div className="flex w-full gap-4 justify-center">
                            <Link href="" className="footer__link">
                                <i className="fa-brands fa-facebook footer__icon fil text-white"></i>
                            </Link>
                            <Link href="" className="footer__link">
                                <i className="fa-brands fa-instagram footer__icon text-white"></i>
                            </Link>
                            <Link href="" className="footer__link">
                                <i className="fa-brands fa-twitter footer__icon text-white"></i>
                            </Link>
                            <Link href="" className="footer__link">
                                <i className="fa-brands fa-linkedin footer__icon text-white"></i>
                            </Link>
                            <Link href="" className="footer__link">
                                <i className="fa-brands fa-tiktok footer__icon text-white"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-white">Khóa học online</h3>
                        <ul className="list-none flex flex-col gap-4">
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS General Reading</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS General Writing</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">Complete TOEIC</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Fundamentals</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Listening</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Reading</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Speaking</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Writing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-white">Khóa học online</h3>
                        <ul className="list-none flex flex-col gap-4">
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS General Reading</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS General Writing</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">Complete TOEIC</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Fundamentals</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Listening</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Reading</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Speaking</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Writing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-white">Khóa học online</h3>
                        <ul className="list-none flex flex-col gap-4">
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS General Reading</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS General Writing</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">Complete TOEIC</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Fundamentals</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Listening</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Reading</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Speaking</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Writing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-white">Khóa học online</h3>
                        <ul className="list-none flex flex-col gap-4">
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS General Reading</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS General Writing</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">Complete TOEIC</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Fundamentals</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Listening</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Reading</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Speaking</Link>
                            </li>
                            <li>
                                <Link href="" className="text-base no-underline text-white font-light">IELTS Intensive Writing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mx-6 mt-9">
                    <h3 className="text-center text-white text-3xl font-extrabold">
                        Thông tin doanh nghiệp
                    </h3>
                    <ul className="mt-4 list-none flex flex-col items-center justify-center gap-5">
                        <li>
                            <p className="font-light text-base text-white">Công ty TNHH Công Nghệ A Plus</p>
                        </li>
                        <li>
                            <p className="font-light text-base text-white">
                                Giấy chứng nhận Đăng ký doanh nghiệp số: 0109675459 do Sở Kế
                                hoạch và Đầu tư thành phố Hà Nội cấp ngày 17/06/2021.
                            </p>
                        </li>
                        <li>
                            <p className="font-light text-base text-white">
                                Điện thoại liên hệ/Hotline: 096 369 5525
                            </p>
                        </li>
                        <li>
                            <p className="font-light text-base text-white">Email: study4.team@gmail.com.</p>
                        </li>
                        <li>
                            <p className="font-light text-base text-white">
                                Địa chỉ trụ sở: Số 15, Ngõ 208 Giải Phóng, Phường Phương Liệt,
                                Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam
                            </p>
                        </li>
                    </ul>
                    <p className="text-white text-lg font-medium text-center mt-5">
                        @ 2021 - Bản quyền của Công ty TNHH Công Nghệ A Plus.
                    </p>
                </div>
            </div>
        </footer>
    );
}
