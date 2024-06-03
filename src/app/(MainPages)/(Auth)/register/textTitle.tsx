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
export default function TextTitle(){
    return(
        <TypewriterEffectSmooth words={words} />
    )
}