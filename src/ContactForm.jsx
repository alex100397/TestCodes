import React, { useState } from 'react';

function ContactForm() {
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        message: '',
    })
    console.log(user);
    const [errors, setErrors] = useState({})
    const validate = () => {
        const errors = {};
        if (!user.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!user.email) {
            errors.email = 'Email is required';
        }
        if (!user.message) {
            errors.message = 'Message is required';
        }
        if (user.email && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
            errors.email = 'Invalid email format';
        }
        return errors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validate();
        setErrors(err);
        if (Object.keys(err).length === 0) {
            setSuccess(true);
        }
    }
    return (
        <div>
            {success ?
                <div style={{
                    height: '200px',
                    border: '1px solid black',
                    'border-radius': '20px',
                    'box-shadow': '0 0 10px rgba(0, 0, 0, 1)',
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                }}>
                    <h1>Thank you, User!</h1>
                </div> :
                <form>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input name='name' id='name' type='text' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input name='email' id='email' type='text' value={user.email} onChange={(e) => {
                            const value = e.target.value;

                            setUser({ ...user, email: value })

                        }} />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor='message'>Message: </label>
                        <textarea name='message' id='message' rows={3} type='text' value={user.message} onChange={(e) => setUser({ ...user, message: e.target.value })} />
                        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </form>}
        </div>
    );
}

export default ContactForm;