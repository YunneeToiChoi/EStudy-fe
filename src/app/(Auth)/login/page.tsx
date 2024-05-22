"use client"

import  Link  from 'next/link';
import "../../../../public/handicraftCSS/loginAndRegisterAndActive.css"
import "./login.css"
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
          <p className="login__details">
            Đăng nhập ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
            TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleLogin)}
              className='space-y-2 max-w-[600px] flex-shrink-0 w-full'
              noValidate
            >
                    <p className="active__course-label">Email</p>
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
              <p className="active__course-label">Mật khẩu</p>
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
                  <Button type='submit' className="active__course-link">
                    Đăng nhập
                  </Button>
            </form>
          </Form>
          <Link href="" className="login__btn login__btn--fb"
                >Đăng nhập với Facebook</Link>
              <br />
              <Link href="" className="login__btn login__btn--gg"
                >Đăng nhập với Google</Link>
          <br />
          <Link href="/register" className="login__link-to-register"
            >Bạn chưa là một thành viên? Đăng ký ngay!</Link>
        </div>
      </div>
    )
}