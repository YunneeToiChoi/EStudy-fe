"use client"
import  Link  from 'next/link';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerUser } from "../../../redux/features/apiRequest";
import "../../../../public/handicraftCSS/loginAndRegisterAndActive.css"
import "./register.css"

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
import { RegisterBody, RegisterBodyType } from '@/schemaValidate/auth.schema'


export default function Register(){
    const dispatch = useDispatch();
    const navigate = useRouter();

    const form = useForm<RegisterBodyType>({
      resolver: zodResolver(RegisterBody),
      defaultValues: {
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      }
    })

    const handleRegister = async (values:RegisterBodyType)=>{
        const { email, password, username } = values;
        const newUser = {
          email: email,
          password:password,
          username:username
        };
        registerUser(newUser,dispatch,navigate.push);
      }
    return(
        <div className="content__container">
          <div className="login__container">
            <p className="login__details">
              Đăng ký ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
              TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleRegister)}
                noValidate>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <p className="active__course-label">Email</p>
                    <FormControl>
                      <Input placeholder='Nhập email' type='email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="active__course-label">Phone numbers</p>
              <input
                type="tel"
                className="active__course-input"
                placeholder="Nhập số điện thoại"/>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <p className="active__course-label">Username</p>
                    <FormControl>
                      <Input placeholder='Nhập tên đăng nhập' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <p className="active__course-label">Password</p>
                    <FormControl>
                      <Input placeholder='Nhập mật khẩu' type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <p className="active__course-label">Confirm Password</p>
                    <FormControl>
                      <Input placeholder='Xác nhận mật khẩu' type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='active__course-link'>
                Đăng ký
              </Button>
            </form>
            </Form>
            <a href="" className="login__btn login__btn--fb">Đăng ký với Facebook</a>
            <br />
            <a href="" className="login__btn login__btn--gg">Đăng ký với Google</a>
            <br />
            <p className="register__privacy">
              Bằng cách đăng ký, bạn đồng ý với
              <Link className="login__link-to-register register__privacy--text" href=""
                > điều khoản sử dụng </Link>
              và
              <Link className="login__link-to-register register__privacy--text" href=""
                > điều khoản bảo mật</Link>.
            </p>
            <Link href="/login" className="login__link-to-register"
              > Đã có tài khoản? Đăng nhập ngay!</Link>
          </div>
        </div>
    )
}
