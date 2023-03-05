import React, { useEffect, useRef, useState } from 'react';
import './LogIn.scss';
import background from './../../images/fatty-corgi-1QsQRkxnU6I-unsplash.jpg';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn : React.FC = props => {
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
    } = useForm();

    const login = () => {
        let body = {
            username: 'corgi',
            password: userInput,
        };
        const url = "https://nkyenlvln9.execute-api.us-east-1.amazonaws.com/auth";
        const headers = {
            "Content-Type" : "application/json", 
            // "Access-Control-Allow-Origin": "*"
        };

        fetch(url, {
            method: "POST", 
            headers,
            body: JSON.stringify(body), 
          })
          .then(response => response.json())
          .then((data) => {
                sessionStorage.setItem('authToken', data.token);
                const path = "/event-management";
                navigate(path);
          })
          .catch(function (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
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
                transition={Bounce}
            />
        </form>
    );
}

export default LogIn;