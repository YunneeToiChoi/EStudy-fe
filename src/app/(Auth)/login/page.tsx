"use client"

import  Link  from 'next/link';
import { loginUser } from "../../../redux/features/apiRequest";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
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
          UsersEmail: email,
          UsersPassword: password,
        };
        await loginUser(newUser, dispatch, navigate.push); // Gọi API login
      };

    return (
      <div className=" mx-10 flex items-center justify-center">
        <div className=" w-[600px] px-[60px] py-[30px] rounded-lg shadow-xl">
          <p className=" text-base font-medium">
            Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
            TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
          </p>
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
          <Link href="" className=" text-primary-bg-color hover:bg-slate-100 hover:text-slate-400 transition duration-150 ease-in-out mt-3 block px-3 py-2 border-[1px] border-primary-bg-color rounded no-underline text-base font-medium text-center"
                >Đăng nhập với Facebook</Link>
              <br />
              <Link href="" className=" text-white hover:bg-red-700 transition duration-150 ease-in-out mt-3 block px-3 py-2 bg-red-500 rounded no-underline text-base font-medium text-center"
                >Đăng nhập với Google</Link>
          <br />
          <Link href="/register" className="block mt-[20px] no-underline text-black text-base transition duration-500 ease-in-out hover:text-primary-bg-color"
            >Bạn chưa là một thành viên? Đăng ký ngay!</Link>
        </div>
      </div>
    )
}