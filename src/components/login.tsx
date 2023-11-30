import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/authActions';
import { loginFields } from '../constants/formFields';
import { Root } from '../store/store';
import FormAction from './formAction';
import FormExtra from './formExtra';
import Input from './input';
interface LoginState {
    [key: string]: string;
}

const fields = loginFields;
let fieldsState: LoginState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

const Login: React.FC = () => {
    const state = useSelector((state:Root) => state.root);
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState<LoginState>(fieldsState);
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };
    const handleSubmit=(e: FormEvent): void=>{
        e.preventDefault();
        authenticateUser();
    }
    const authenticateUser = async (): Promise<void> =>{
        const { email, password } = loginState;
        const loginUserThunk = loginUser({ email, password });
        await loginUserThunk(dispatch);
        navigate("/home");
    }
    return (
    <form className="mt-8 space-y-6">
        <div className="-space-y-px">
        {fields.map((field) => (
            <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            />
        ))}
        </div>
        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text='login'/>
    </form>
    );
};

export default Login;
