import React, { useState } from "react";

export const Register = (props) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          userName: userName,
          pass: pass,
        }),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Error registering user', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          required
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          name="pass"
          id="pass"
          required
          placeholder="********"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <button onClick={() => props.onFormSwitch('login')}>
        Already have an account?
      </button>
    </>
  );
}

export default Register;
