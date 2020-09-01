import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CustomFormInput from '../../components/CustomFormInput/CustomFormInput.component';
import './LoginPage.styles.scss';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
        const pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
        if (pattern.test(e.target.value)) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
                "email": `${email}`,
                "password": `${password}`
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        fetch('http://zjrrl.mocklab.io/login', requestOptions)
            .then(response => response.json())
            .then(data => data.message === 'successful login' ? setSuccess(true) : setSuccess(false));
    }

    return (
        <div className="login-page-container">
            <h1 className="heading">Sign In To Your Account</h1>
            <CustomFormInput name="email" type="email" label="Email address" value={email} valid={isValidEmail} onChange={handleChange} required />
            <CustomFormInput name="password" type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} valid={true} required />
            <div className="sign-in-button-container">
                    <button
                        className={`${password.length
                                    && isValidEmail
                                    ?   'enable-sign-up-button'
                                    :   ''}`}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </div>
                {success ? <Route exact path="/" render={() => (window.location = "https://www.google.com")} /> : null}
        </div>
    );
}

export default LoginPage;