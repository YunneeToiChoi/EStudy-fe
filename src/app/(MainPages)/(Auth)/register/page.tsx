"use client"
import  Link  from 'next/link';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { registerUser } from  "@/app/service/api/apiRequest";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterBody, RegisterBodyType } from '@/app/service/schemaValidate/auth.schema'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Create",
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
          UserEmail: email,
          UserPassword:password,
          UserName:username,
        };
        registerUser(newUser,dispatch,navigate.push);
      }

    return(
        <div className="pt-10 mx-10 flex items-center justify-center">
          <div className="bg-white/35 w-[600px] px-[60px] py-[30px] rounded-lg shadow-xl">
            <TypewriterEffectSmooth words={words} />
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
            </Form>
            <div className=' m-auto w-4/5 flex items-center justify-center gap-3'>
              <hr className=' w-full'></hr>
              <span className=' text-lg font-normal text-slate-300'>Or</span>
              <hr className='w-full'></hr>
            </div>
          <Link href="" className=" flex justify-center items-center gap-3 hover:bg-slate-100 transition duration-500 ease-in-out text-slate-400 mt-3 w-full px-3 py-2 border-[2px] border-slate-300 rounded no-underline text-base font-normal text-center"
          >
            <i className="fa-brands fa-facebook text-2xl text-blue-500"></i>
            <span>Đăng kí với Facebook</span></Link>
              <br />
              <Link href="" className="flex justify-center items-center gap-3 hover:bg-slate-100 transition duration-500 ease-in-out text-slate-400 mt-3 w-full px-3 py-2 border-[2px] border-slate-300 rounded no-underline text-base font-normal text-center"
                >
                  <i className="fa-brands fa-google text-2xl text-red-500"></i>
                  <span>Đăng kí với Google</span></Link>
          <br />
          <div className='flex items-center gap-1 justify-center mt-[20px] no-underline text-black text-base '>
            <span>Bạn đã có tài khoản?</span>
            <Link href="/register" className="hover:underline transition duration-300 ease-in-out hover:text-primary-bg-color"
            > Đăng nhập ngay</Link>
          </div>
          </div>
        </div>
    )
}
