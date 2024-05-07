import React from 'react'
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ButtonDemo } from './loginBtn';
import { ButtonGhost } from './registerBtn';
import  Link  from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
        <div className=' flex w-full pb-8 justify-between' >
            <div><ModeToggle></ModeToggle></div>
            <div className=' flex gap-3'>
                <Link href='/login'><ButtonDemo></ButtonDemo></Link>
                <Link href='/register'><ButtonGhost></ButtonGhost></Link>
            </div>
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="/">
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
