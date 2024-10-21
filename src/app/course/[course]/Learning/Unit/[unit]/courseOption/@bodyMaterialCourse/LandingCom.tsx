"use client";
import React from "react";
import CommentComponent from "@/app/components/comment/commentActive"
import ShowListComment from "@/app/components/comment/commentList";
interface CommentComponent
{
  params:any
}
const LangComment: React.FC<CommentComponent> = ({ params }) =>  {
  return (
    <section className=" pt-4 pb-20">
    <CommentComponent dataId={Number(params.course)} type='Course'></CommentComponent>
    <ShowListComment dataId={Number(params.course)} type='Course'></ShowListComment>
    </section>
   
  );
}
export default LangComment;