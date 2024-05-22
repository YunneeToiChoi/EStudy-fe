"use client"
import  Link  from 'next/link';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerUser } from "../../../redux/features/apiRequest";
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
        phone:'',
        password: '',
        confirmPassword: ''
      }
    })

    const handleRegister = async (values:RegisterBodyType)=>{
        const { email, password, username,phone } = values;
        const newUser = {
          UsersEmail: email,
          UsersPassword:password,
          UsersName:username,
        };
        registerUser(newUser,dispatch,navigate.push);
      }
    return(
        <div className="mx-10 flex items-center justify-center">
          <div className=" w-[600px] px-[60px] py-[30px] rounded-lg shadow-xl">
            <p className=" text-base font-medium">
              Đăng ký ngay để bắt đầu trải nghiệm học tiếng Anh và luyện thi
              TOEIC/IELTS hiệu quả cùng hàng trăm ngàn học viên mỗi ngày.
            </p>
            <Form {...form}>
              <form
              className='flex flex-col'
                onSubmit={form.handleSubmit(handleRegister)}
                noValidate>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <p className="text-base font-medium mt-5 mb-1">Email</p>
                    <FormControl>
                      <Input placeholder='Nhập email' type='email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <p className=" text-base font-medium mt-5 mb-1">Your phone numbers</p>
                    <FormControl>
                      <Input placeholder='Nhập số điện thoại'{...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <p className="text-base font-medium mt-5 mb-1">Username</p>
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
                    <p className="text-base font-medium mt-5 mb-1">Password</p>
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
                    <p className="text-base font-medium mt-5 mb-1">Confirm Password</p>
                    <FormControl>
                      <Input placeholder='Xác nhận mật khẩu' type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button type='submit' className=' w-40 m-auto bg-primary-bg-color text-white  text-lg font-medium my-6 hover:bg-primary-bg-color-hover transition duration-150 ease-in-out text-center  no-underline py-2 rounded-[6px] border-none'>
                Đăng ký
              </button>
            </form>
            <div className=' w-4/5 m-auto h-[2px] bg-slate-300 mb-7'></div>
            </Form>
            <Link href="" className=" text-primary-bg-color hover:bg-slate-100 hover:text-slate-400 transition duration-150 ease-in-out mt-3 block px-3 py-2 border-[1px] border-primary-bg-color rounded no-underline text-base font-medium text-center">Đăng ký với Facebook</Link>
            <br />
            <Link href="" className=" text-white hover:bg-red-700 transition duration-150 ease-in-out mt-3 block px-3 py-2 bg-red-500 rounded no-underline text-base font-medium text-center">Đăng ký với Google</Link>
            <br />
            <Link href="/login" className=" block mt-[20px] no-underline text-black text-base transition duration-500 ease-in-out hover:text-primary-bg-color"
              > Đã có tài khoản? Đăng nhập ngay!</Link>
          </div>
        </div>
    )
}
