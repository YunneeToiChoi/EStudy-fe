import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
    {
      text: "Log",
      className:" text-3xl max-xl:text-2xl",
    },
    {
      text: "in",
      className:" text-3xl max-xl:text-2xl",
    },
    {
      text: "to",
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

export default function textTitle(){
    return(
        <TypewriterEffectSmooth words={words} />
    )
}