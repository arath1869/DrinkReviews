import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'
import { Link } from "react-router-dom";
import { Modal } from '../../context/Modal';
import SignupFormPage from '../SignupFormPage/SignupForm'

function LoginForm() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div className="form_div">
            <div className="form_title">{`Sign in to DrinkReviews`} </div>
        <form className="form" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
        <input className="login_form"placeholder="Email or Username"
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <label>
        <input className="login_form"placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button className="modal-login-button" type="submit">Log In</button>
                <div className="form-login-redirect">Don't Have An Account? <Link className="signupNavLink" onClick={() => setShowModal(true)}>Signup</Link>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <SignupFormPage />
                        </Modal>
                    )}
                </div>
        </form>
        </div>
    );
}

export default LoginForm;