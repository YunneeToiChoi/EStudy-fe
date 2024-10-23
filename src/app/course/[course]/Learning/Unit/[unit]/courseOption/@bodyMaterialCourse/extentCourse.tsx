import Link from "next/link"
import { zodResolver } from '@hookform/resolvers/zod';
import { useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { OrderRenewCourseBody, OrderRenewCourseBodyType } from '@/schemaValidate/orderRenewCourse.schema'

import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RequestApiOrderRenewCourse } from "@/service/api/apiOrderRequest";
interface CommentComponent
{
  params:any
}
const ExtentCourse: React.FC<CommentComponent> = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();   

  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const listCourses = useSelector((state: any) => state.ThunkReducer.courses.AllCourseByUsers?.data?.courses);
  const selectedCourse = listCourses.find((course: any) => course.courseId === Number(params.course));

  const form = useForm<OrderRenewCourseBodyType>({
    resolver: zodResolver(OrderRenewCourseBody),
    defaultValues: {
      address: '',
      email: '',
      userName: '',
      phoneNumber: '',
    },
  });

  const handleOrder = async (values: OrderRenewCourseBodyType) => {
    const dataOrder = {
      UserId: user.userId,
      CourseId: params.course,
    };

    const idToast = toast.loading('Đang chuyển hướng đến trang Momo....', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    try {
      const paymentSuccess = await RequestApiOrderRenewCourse(
        dataOrder,
        dispatch,
        selectedCourse.coursePrice,
        params.course,
        selectedCourse.courseName,
        user.userId,
        router.push
      );

      if (paymentSuccess===true) {
        toast.update(idToast, {
          render: 'Chuyển hướng thành công!',
          type: "success",
          isLoading: false,
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.update(idToast, {
          render: 'Chuyển hướng thất bại!',
          type: "error",
          isLoading: false,
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (err) {
      toast.update(idToast, {
        render: 'Chuyển hướng thất bại!',
        type: "error",
        isLoading: false,
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="mt-8">
      <div className="grid wide grid-wide-course-learn">
        <div className="content__box">
          <h1 className="content__box-header">
            Gia hạn khóa học: [Complete TOEIC] Chiến lược làm bài - Từ vựng - Ngữ pháp - Luyện nghe với Dictation [Tặng khoá TED Talks]
          </h1>
          <p className="content__box-time-left">Bạn còn 32 ngày học</p>
          <p className="tag-search__transition-link tag-search__transition-link--chosen w-fit">
            Chuyển khoản trực tiếp
          </p>
          <p className="content__box-time-left">
            Discount 15% khi gia hạn các khóa tự học (không áp dụng với gói chấm chữa)...
          </p>
          <p className="content__box-details">Thông tin khóa học:</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOrder)} noValidate>
              <div className="grid gap-4 py-4">
                <div className="grid items-center gap-4">
                  <Label htmlFor="userName" className="text-left">Họ tên*</Label>
                    <FormField
                      control={form.control}
                      name="userName"
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
                <div className="extend__input-box">
                  <div className="row">
                    <div className="col l-6">
                      <Label htmlFor="phoneNumber" className="text-left">Số điện thoại*</Label>
                      <FormField
                        control={form.control}
                        name="phoneNumber"
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
                    <div className="col l-6">
                      <Label htmlFor="email" className="text-left">Email</Label>
                      <FormField
                        control={form.control}
                        name="email"
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
                </div>
                <div className="grid items-center gap-4">
                  <Label htmlFor="address" className="text-left">Địa chỉ*</Label>
                  <FormField
                    control={form.control}
                    name="address"
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
              <button type="submit" className="details__btn details__btn-register w-full">
                ĐẶT HÀNG NGAY
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ExtentCourse;