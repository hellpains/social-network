import React from 'react'
import s from './FormControls.module.css'

type PropsType = {
    input: any
    meta: any
    child: any
    element:any
}


export const FormControl: React.FC<PropsType> = ({input, meta, child,element, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {props.children}
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props: any) => {
    return   <FormControl {...props}><textarea {...props.input} {...props} /></FormControl>
}


export const Input = (props: any) => {
    return <FormControl {...props}><input {...props.input} {...props} /></FormControl>
}