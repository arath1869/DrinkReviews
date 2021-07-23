import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useLocation } from 'react-router-dom'
import SignupForm from './SignupForm';
import './SignupFormModal.css'


function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation()

    return (
        <>
           {location.pathname === '/' &&
            <button className="signup-button" onClick={() => setShowModal(true)}>Signup</button>
           }
            {location.pathname !== '/' &&
                <button className="signup-button-light" onClick={() => setShowModal(true)}>Signup</button>
            }
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;