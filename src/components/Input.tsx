import { forwardRef } from "react"

type Props = {
  placeholder: string
}

export const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, ...rest } : Props, ref) => {

  return (
      <input className="w-full outline-1 outline-emerald-500 py-2 px-4 rounded-lg mb-10 border-2 border-slate-300 shadow-lg" 
      placeholder={placeholder}
      ref={ref}
      {...rest} />
  )

})