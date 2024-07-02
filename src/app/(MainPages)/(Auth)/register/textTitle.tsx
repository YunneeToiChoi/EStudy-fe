import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
const words = [
    {
      text: "Tạo",
      className:" text-3xl max-xl:text-2xl",
    },
    {
      text: "Tài",
      className:" text-3xl max-xl:text-2xl",
    },
    {
      text: "Khoản",
      className: "text-3xl max-xl:text-2xl",
    },
    {
      text: "Của",
      className: "text-3xl max-xl:text-2xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "Bạn",
      className: "text-3xl max-xl:text-2xl text-blue-500 dark:text-blue-500",
    },
  ]
export default function TextTitle(){
    return(
        <TypewriterEffectSmooth words={words} />
    )
}