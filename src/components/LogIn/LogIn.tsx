import React, { useEffect, useRef, useState } from 'react';
import './LogIn.scss';
import background from './../../images/fatty-corgi-1QsQRkxnU6I-unsplash.jpg';
import { useNavigate } from 'react-router';

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

    const onUserInputKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter' && userInput !== '') {
            const path = "/event-management";
            navigate(path);
        }
    }

    const onClickChangeInputTypeButton = () => {
        if (inputType == 'password') {
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

    return (
        <div className={`log-in`} style={{ backgroundImage: `url(${background})`}}>
            <input className={`log-in-input`} value={userInput} onChange={onChangeUserInput} 
                ref={inputRef} type={inputType} onKeyPress={onUserInputKeyPress} />
            <button className={`log-in-button-show`} onClick={onClickChangeInputTypeButton}>
                {labelButton}
            </button>
        </div>
    );
}

export default LogIn;