"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";
import Image from "next/image";

export function WavyBackgroundDemo() {
  return (
    <>
      <WavyBackground className="max-w-6xl mx-auto pb-40">
        {/* Logo and title */}
        <div className="text-center mb-8">
          <Link className="flex gap-2 items-center justify-center" href="/">
            <Image
              className="nav__img"
              src="/img/.svg/logo_document.svg"
              alt="Logo"
              width={70}
              height={70}
              quality={100}
            />
            <h1 className="text-5xl text-white font-bold tracking-wide">
              E-<span className="text-primary-upload-document">Study</span>{" "}
              Premium
            </h1>
          </Link>
        </div>
        <p className="!leading-snug mt-12 text-3xl md:text-5xl lg:text-7xl text-white font-extrabold text-center">
          Trải nghiệm đa dạng khoá học trong thời gian ngắn
        </p>
        <p className="text-lg md:text-xl mt-4 text-white font-light text-center">
          Truy cập nhiều khoá học, tài liệu giúp bạn có trải nghiệm toàn diện hơn về nền tảng E-Study
        </p>
      </WavyBackground>
    </>
  );
}
