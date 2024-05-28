"use client"

import  Link  from 'next/link';
import { loginUser } from "../../../../redux/features/apiRequest";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
  } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginBody, LoginBodyType } from '@/schemaValidate/auth.schema'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";



const words = [
  {
    text: "Log",
    className:" text-3xl max-xl:text-2xl",
  },
  {
    text: "in",
    className:" text-3xl max-xl:text-2xl",
  },
  {
    text: "to",
    className:" text-3xl max-xl:text-2xl",
  },
  {
    text: "your",
    className:" text-3xl max-xl:text-2xl",
  },
  {
    text: "Account",
    className: "text-3xl max-xl:text-2xl text-blue-500 dark:text-blue-500",
  },
]




export default function Login() {

    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: '',
            password: ''
        }
      })

    const dispatch = useDispatch();
    const navigate = useRouter();

    const handleLogin = async (values: LoginBodyType) => {
        const { email, password } = values; // Lấy giá trị từ form
        const newUser = {
          UserEmail: email,
          UserPassword: password,
        };
        await loginUser(newUser, dispatch, navigate.push); // Gọi API login
      };


    return (
      <div className="pt-10 mx-10 flex items-center justify-center">
        <div className=" bg-white/35 w-[600px] px-[60px] py-[30px] rounded-lg shadow-xl">
          <TypewriterEffectSmooth words={words} />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleLogin)}
              className='flex flex-col'
              noValidate
            >
                    <p className="text-base font-medium mt-5 mb-1">Email</p>
                    <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder='Nhập email'{...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              <p className="text-base font-medium mt-5 mb-1">Mật khẩu</p>
              <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder='Nhập mật khẩu' type='password' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button type='submit' className="w-40 m-auto bg-primary-bg-color text-white  text-lg font-medium my-6 hover:bg-primary-bg-color-hover transition duration-150 ease-in-out text-center  no-underline py-2 rounded-[6px] border-none">
                    Đăng nhập
                  </button>
            </form>
          </Form>
          <div className=' m-auto w-4/5 flex items-center justify-center gap-3'>
              <hr className=' w-full'></hr>
              <span className=' text-lg font-normal text-slate-300'>Or</span>
              <hr className='w-full'></hr>
            </div>
          <Link href="" className=" flex justify-center items-center gap-3 hover:bg-slate-100 transition duration-500 ease-in-out text-slate-400 mt-3 w-full px-3 py-2 border-[2px] border-slate-300 rounded no-underline text-base font-normal text-center"
          >
            <i className="fa-brands fa-facebook text-2xl text-blue-500"></i>
            <span>Đăng nhập với Facebook</span></Link>
              <br />
              <Link href="" className="flex justify-center items-center gap-3 hover:bg-slate-100 transition duration-500 ease-in-out text-slate-400 mt-3 w-full px-3 py-2 border-[2px] border-slate-300 rounded no-underline text-base font-normal text-center"
                >
                  <i className="fa-brands fa-google text-2xl text-red-500"></i>
                  <span>Đăng nhập với Google</span></Link>
          <br />
          <div className='flex items-center gap-1 justify-center mt-[20px] no-underline text-black text-base '>
            <span>Bạn chưa là một thành viên?</span>
            <Link href="/register" className="hover:underline transition duration-300 ease-in-out hover:text-primary-bg-color"
            > Đăng ký ngay</Link>
          </div>
        </div>
      </div>
    )
}