import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
    {
      text: "Tham",
      className:" text-3xl max-xl:text-2xl",
    },
    {
      text: "gia",
      className:" text-3xl max-xl:text-2xl",
    },
    {
      text: "học",
      className:" text-3xl max-xl:text-2xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "ngay !",
      className: "text-3xl max-xl:text-2xl text-blue-500 dark:text-blue-500",
    },
  ]

export default function textTitle(){
    return(
        <TypewriterEffectSmooth words={words} />
    )
}