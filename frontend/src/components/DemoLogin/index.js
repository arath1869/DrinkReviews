import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './DemoLogin.css'

const DemoLogin = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const [credential, setCredential] = useState('Demo');
    const [password, setPassword] = useState('password');
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <form onSubmit={handleSubmit} className='demo-form'>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
        <input
                    type="hidden"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <label>
        <input
                    type="hidden"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            {location.pathname==='/' &&
            <button className="demo-button" type="submit">Demo</button>
            }
            {location.pathname !== '/' &&
                <button className="demo-button-light" type="submit">Demo</button>
            }
        </form>
    );
}

export default DemoLogin;