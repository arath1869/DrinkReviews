import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal';
import './SignupForm.css'


function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div>
            <div className="form_title">Signup for DrinkReviews</div>
        <form className="form" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        <input className="signup-form"
            placeholder="Enter Your Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
        <input className="signup-form"
                    placeholder="Enter Desired Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
        <input className="signup-form"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
        <input className="signup-form"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            <button className="modal-login-button" type="submit">Sign Up</button>
                <div className="form-signup-redirect">Already Have An Account? <Link className="signupNavLink" onClick={() => setShowModal(true)}>Login</Link>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginForm />
                        </Modal>
                    )}
                </div>
        </form>
        </div>
    );
}

export default SignupFormPage;