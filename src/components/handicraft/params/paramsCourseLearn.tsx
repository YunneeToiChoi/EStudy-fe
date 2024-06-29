"use client"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useSelector } from 'react-redux';
interface paramsProps {
  params: any;
}
export const BreadcrumbWithCustomSeparator: React.FC<paramsProps> = ({ params }) => {
  const listCourse= useSelector((state:any) =>state.ThunkReducer.courses?.AllCourseByUsers?.data?.courses);
  const listUnit = useSelector((state:any)=>state.ThunkReducer.contentUnits?.ContentUnit?.data);
  const course = listCourse.find((course:any) => course.courseId === Number(params.course));
  const courseName = course ? course.courseName : null;
  const unit = listUnit?.find((unit:any) => unit.unitId === Number(params.unit));
  const unitName = unit? unit.unitName : null;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href={`/course/${params.course}/Learning/Unit/LandingCourse/courseOption`}>{courseName}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href={`/course/${params.course}/Learning/Unit/${params.unit}/courseOption`}>{unitName}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
