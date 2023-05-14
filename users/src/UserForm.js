import React, { useState } from 'react'

const UserForm = ({ onUserAdd }) => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onUserAdd({name, email});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text' 
                    name='name' 
                    value={name} 
                    onChange={(e)=> setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    name='email' 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <button type='submit'>Add User</button>
        </form>
    )
}

export default UserForm