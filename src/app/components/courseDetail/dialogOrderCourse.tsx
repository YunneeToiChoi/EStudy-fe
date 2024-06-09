import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
  } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { OrderCourseBody, OrderCourseBodyType } from '@/schemaValidate/orderCourse.schema'

import { RequestApiOrder } from "@/service/api/apiOrderRequest";

interface OrderDialogProps {
  courseId: number;
  CoursesDetail: any;
}

const OrderDialog: React.FC<OrderDialogProps> = ({ courseId, CoursesDetail }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: any) => state.persistedReducer?.auth?.login?.data?.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<OrderCourseBodyType>({
    resolver: zodResolver(OrderCourseBody),
    defaultValues: {
      address: '',
      phone: ''
    }
  });

  const checkUser = () => {
    if (!user) {
      router.push("/login");
    }
  }

  const handleOrder = async (values: OrderCourseBodyType) => {
    setIsSubmitting(true); // Disable the button
    const { address, phone } = values;
    const dataOrder = {
      UserId: user.userId,
      CourseId: courseId,
      Address: address,
      TotalAmount: CoursesDetail.coursePrice,
      PhoneNumber: phone,
    };
    await RequestApiOrder(dataOrder, dispatch, CoursesDetail, user.userId, router.push);
    setIsSubmitting(false); // Enable the button again
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={checkUser}>ĐĂNG KÝ HỌC NGAY</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[490px]">
        <DialogHeader>
          <DialogTitle>Thanh toán khoá học</DialogTitle>
          <DialogDescription>
            Mua khoá học: [IELTS General Training] Intensive Writing: Thực hành luyện tập Writing GT
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleOrder)} noValidate>
            <div className="grid gap-4 py-4">
              <div className="grid items-center gap-4">
                <Label htmlFor="phone" className="text-left">
                  Phone number
                </Label>
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="col-span-3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid items-center gap-4">
                <Label htmlFor="address" className="text-left">
                  Address
                </Label>
                <FormField
                  control={form.control}
                  name='address'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="col-span-3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <button 
              className="bg-primary-bg-color w-full text-white block mt-[10px] p-[10px] rounded-[10px] no-underline text-base text-center border-[1px] border-transparent" 
              type="submit" 
              disabled={isSubmitting}
            >
              ĐẶT HÀNG NGAY
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default OrderDialog;
