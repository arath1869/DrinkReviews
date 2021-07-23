import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import './LoginModalButton.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    const location= useLocation()

    return (
        <>
            {location.pathname==='/' &&
            <button className="login-button" onClick={() => setShowModal(true)}>Log In</button>
            }
            {location.pathname !== '/' &&
                <button className="login-button-light" onClick={() => setShowModal(true)}>Log In</button>
            }
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;