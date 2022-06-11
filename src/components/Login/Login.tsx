import React from 'react' ;
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";


export const Login = () => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)