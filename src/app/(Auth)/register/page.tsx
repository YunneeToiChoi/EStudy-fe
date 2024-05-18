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

    const handleRegister= async (values:RegisterBodyType)=>{
        const { email, password, username } = values;
        const newUser = {
          email: email,
          password:password,
          username:username
        };
        registerUser(newUser,dispatch,navigate.push);
      }
    return(
      <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleRegister)}
              className='space-y-2 max-w-[600px] flex-shrink-0 w-full'
              noValidate
            >
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' type='email' {...field} />
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
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nhập lại mật khẩu</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='!mt-8 w-full'>
                Đăng ký
              </Button>
            </form>
          </Form>
    )
}