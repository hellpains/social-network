import React from 'react'
import s from './FormControls.module.css'

type PropsType = {
    input?: any
    meta: any
    child?: any
    element?:any
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


export const Textarea: React.FC<PropsType> = (props) => {
    const {input, meta,child,...restProps}=props
    return   <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}


export const Input: React.FC<PropsType> = (props) => {
    const {input, meta,child,...restProps}=props
    return   <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}