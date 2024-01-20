import React from "react";
import { useUser } from "./User_Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
	const { userName, setUserName } = useUser();
	const [pass, setPass] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(
			"Sending request with username:",
			userName,
			"and password:",
			pass
		);

		let response;

		try {
			response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: userName,
					password: pass,
				}),
			});

			if (!response.ok) {
				console.error(
					"Authentication failed:",
					response.status,
					response.statusText
				);
				// Handle authentication failure
				// Log the response for debugging
				const errorResponse = await response.json();
				console.error("Error details:", errorResponse);
			} else {
				console.log("Login successful at", new Date().toISOString());
				// Access userName from context and log it
				console.log("User logged in:", userName);
				navigate("/");
			}
		} catch (error) {
			console.error("Error logging in at", new Date().toISOString(), error);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} style={{ color: "white" }}>
				<label htmlFor="user">User Name:</label>
				<input
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					type="text"
					placeholder="User Name"
				/>
				<label htmlFor="pass">Password:</label>
				<input
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					type="password"
					required
					placeholder="********"
				/>
				<button type="submit">Log In</button>
			</form>
			<button onClick={() => props.onFormSwitch("register")}>
				{" "}
				Need to register?
			</button>
		</>
	);
};

export default Login;
