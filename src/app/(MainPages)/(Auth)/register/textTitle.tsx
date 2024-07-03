import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
const words = [
    {
      text: "Bắt",
      className:" text-3xl max-xl:text-2xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "đầu",
      className:" text-3xl max-xl:text-2xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "hành",
      className: "text-3xl max-xl:text-2xl",
    },
    {
      text: "trình",
      className: "text-3xl max-xl:text-2xl",
    },
    {
      text: "mới !",
      className: "text-3xl max-xl:text-2xl",
    },
  ]
export default function TextTitle(){
    return(
        <TypewriterEffectSmooth words={words} />
    )
}