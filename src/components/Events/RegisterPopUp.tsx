import React, { useEffect, useRef, useState } from 'react';
import EventModel from '../../model/EventModel';
import RegisterRequest from '../../model/RegisterRequest';
import EventButton from './EventButton/EventButton';
import './RegisterPopUp.scss';

interface IRegisterPopUpProps {
    isVisible : boolean;
    setRegisterPopUpVisible : (visible : boolean) => void;
    setEvents : (events : EventModel[]) => void;
    events : EventModel[];
    eventId : number;
    eventTitle : string;
    maxParticipants : number | null;
}

const RegisterPopUp : React.FC<IRegisterPopUpProps> = props => {
    const isVisibleClassName = props.isVisible ? 'visible' : '';
    const [ participants, setParticipants ] = useState(2);
    const [ name, setName ] = useState('Poney');
    const [ firstName, setFirstName ] = useState('Puppy');
    const [ email, setEmail ] = useState('mark.kimanh@gmail.com');

    const decreaseParticipants = () => {
        if (participants > 0) {
            setParticipants(t => t - 1);
        }
    }

    const increaseParticipants = () => {
        if (props.maxParticipants != null && participants < props.maxParticipants) {
            setParticipants(t => t + 1);
        }
    }

    const onChangeNameInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onChangeFirstNameInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const onChangeEmailInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onConfirm = () => {
        if (valid()) {
            closePopUp();
            sendRegisterRequest();
        }
    }

    const closePopUp = () => {
        resetFields();
        props.setRegisterPopUpVisible(false);
    }

    const valid = () => {
        if (name !== '' && firstName !== '' && email !== '' && validateEmail(email) && participants > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    const validateEmail = (email : string) => {
        return email.toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const resetFields = () => {
        setName('Poney ');
        setFirstName('Puppy');
        setEmail('mark.kimanh@gmail.com');
        setParticipants(2);
    }

    const sendRegisterRequest = () => {
        const registerRequest = new RegisterRequest(props.eventId, name, firstName, email, participants);
        fetch('https://c6j46s4z90.execute-api.us-east-1.amazonaws.com/', 
            { method: "POST", body: JSON.stringify(registerRequest) })
            .then(response => response.json())
            .then(data => {
                const newEvent = EventModel.deserialize(data);
                const updatedEvents : EventModel[] = props.events.filter(t => t.id !== props.eventId);
                updatedEvents.push(newEvent);
                props.setEvents(updatedEvents);
            });
    }

    const onContainerClick = (event : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        closePopUp();
    }

    const onPopUpClick = (event : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    }

    const nameInputReference = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (props.isVisible && nameInputReference.current !== null) {
            nameInputReference.current.focus();
        }
    }, [props.isVisible]);

    return (
        <div className={`register-pop-up ${isVisibleClassName}`} onClick={onContainerClick}>
            <div className='register-pop-up-content' onClick={onPopUpClick}>
                <div className='event-title'>{props.eventTitle}</div>
                <table>
                    <tbody>
                        <tr>
                            <td className='align-right'>Nom</td>
                            <td className='td-gutter'></td>
                            <td><input value={name} onChange={onChangeNameInput} ref={nameInputReference} /></td>
                        </tr>
                        <tr>
                            <td className='align-right'>Prénom</td>
                            <td className='td-gutter'></td>
                            <td><input value={firstName} onChange={onChangeFirstNameInput} /></td>
                        </tr>
                        <tr>
                            <td className='align-right'>Email</td>
                            <td className='td-gutter'></td>
                            <td><input value={email} onChange={onChangeEmailInput} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className='register-participants flex-row'>
                    <p>Nombre de participants</p>
                    <div className='participants-number'>
                        <button onClick={decreaseParticipants}>-</button>
                        <span>{participants}</span>
                        <button onClick={increaseParticipants}>+</button>
                    </div>
                </div>
                <div className='register-pop-up-confirmation'>
                    <EventButton text="Confirmer" onClick={onConfirm} disabled={false}/>
                </div>
            </div>
        </div>
    );
}

export default RegisterPopUp;