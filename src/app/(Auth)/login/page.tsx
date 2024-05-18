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
        console.log("aaaaa");
        const { email, password } = values; // Lấy giá trị từ form
        const newUser = {
          email: email,
          password: password,
        };
        await loginUser(newUser, dispatch, navigate.push); // Gọi API login
      };

    return (

        <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className='space-y-2 max-w-[600px] flex-shrink-0 w-full'
          noValidate
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn'{...field} />
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
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <Button type='submit' className='!mt-8 w-full'>
            Đăng nhập
          </Button>
        </form>
      </Form>
    )
}