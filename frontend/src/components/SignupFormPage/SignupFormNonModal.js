import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink, Link} from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal';
import './SignupFormNonModal.css'


function SignupFormNonModal() {
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
        <div className="outterDiv">
            <NavLink to="/">
            <button className="signupHome_button">Home</button>
            </NavLink>
        <div className="nonModalSignup">
            <div className="form_title">Signup for DrinkReviews</div>
            <form className="form" onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
        <input placeholder="Please enter your Email" className="login_form"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
        <input placeHolder="Please enter your desired Username" className="login_form"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
        <input placeholder="Please enter your desired Password" className="login_form"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
        <input placeholder="Please confirm your Password"className="login_form"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button className='signinPage-button'type="submit">Sign Up</button>
                    <div className="form-login-redirect">Already have an account?  <Link className="signup-login-link" onClick={() => setShowModal(true)}>Log In</Link>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <LoginForm />
                            </Modal>
                        )} </div>
            </form>
        </div>
        </div>
    );
}

export default SignupFormNonModal;