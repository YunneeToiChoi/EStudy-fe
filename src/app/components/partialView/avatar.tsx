import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  interface ImageProps {
    SrcImage:any;
  }
  export const AvatarDemo:React.FC<ImageProps>=({SrcImage}) => {
    console.log(SrcImage)
    return (
      <Avatar>
        <AvatarImage src={SrcImage} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  