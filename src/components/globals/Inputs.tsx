import { inputs, typoGraphy } from '@/lib/cssConfig'
import clsx from 'clsx'
import React from 'react'

type inputProps = {
    label?:string,
    placeholder?:string,
    inputType?:"text" | "number"
}

export const Input01:React.FC<inputProps> = ({label,placeholder,inputType}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <span className={clsx(typoGraphy.text18)}>{label}</span>

        <input type={inputType} placeholder={placeholder} className={clsx(inputs.input01,typoGraphy.text20)} />

    </div>
  )
}
