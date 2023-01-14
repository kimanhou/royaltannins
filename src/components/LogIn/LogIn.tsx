import React, { useEffect, useRef, useState } from 'react';
import './LogIn.scss';
import background from './../../images/fatty-corgi-1QsQRkxnU6I-unsplash.jpg';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Flip, toast, ToastContainer } from 'react-toastify';

interface ILogInProps {

}

const LogIn : React.FC<ILogInProps> = props => {
    const [ inputType, setInputType ] = useState('password');
    const [ labelButton, setLabelButton ] = useState('show');
    const [ userInput, setUserInput ] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const onChangeUserInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }

    const onClickChangeInputTypeButton = () => {
        if (inputType === 'password') {
            setInputType('text');
            setLabelButton('hide');
        }
        else {
            setInputType('password');
            setLabelButton('show');
        }
    }

    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, []);

    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    const login = (data : any) => {
        let params = {
            email: 'corgi@yahoo.com',
            password: userInput,
        };
        
        axios
            .post("https://2epoooo4sg.execute-api.us-east-1.amazonaws.com/royalTannins-auth", params,
            {headers : {"Content-Type" : "application/json", "Access-Control-Allow-Origin": "*"}})
            .then(function (response) {
                console.log(response);
                if (response.data.success === false) {
                    // TODO
                    console.log('Unauthorized');
                } else {
                    const path = "/event-management";
                    navigate(path);
                }
          })
    
          .catch(function (error) {
            console.log(error);
          });
      };

    return (
        <form autoComplete="off" onSubmit={handleSubmit(login)}
            className={`log-in`} style={{ backgroundImage: `url(${background})`}}>
            <input className={`log-in-input`} value={userInput} 
                onChange={onChangeUserInput} ref={inputRef} type={inputType} />
            <button className={`log-in-button-show`} onClick={onClickChangeInputTypeButton} type="button">
                {labelButton}
            </button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                limit={1}
                transition={Flip}
            />
        </form>
    );
}

export default LogIn;