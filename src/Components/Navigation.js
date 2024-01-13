import React from 'react'

export const Register = (props) => {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, userName)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" name="name" id="name" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="userName">User Name:</label>
        <input type="text" name="userName" id="userName" required placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
    </>
  )
}

export default Register
