import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className=" text-base w-full p-3 rounded-sm border-[2px] border-input-color outline-none focus:outline-none focus:border-primary-bg-color"
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
