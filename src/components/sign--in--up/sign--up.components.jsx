import React, { useState } from "react";
import FormImput from "../../forminput/forminput.components";
import CustomButton from "../custom-button/custom-button.components";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const  SignUp = ({ signUpStart }) => {
const [userCredentials, setUserCredentials] = useState({displayName: "",
			email: "",
			password: "",
			confirmPassword: "",})


			const { password, confirmPassword, displayName, email } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();
		signUpStart(password, confirmPassword, displayName, email);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;

		setUserCredentials({...userCredentials, [name]: value });
	};
		return (
			<form className="form" onSubmit={handleSubmit}>
				<FormImput
					name="displayName"
					type="text"
					onChange={handleChange}
					value={displayName}
					label="Name"
				/>
				<FormImput
					name="email"
					type="email"
					value={email}
					onChange={handleChange}
					label="Email"
				/>
				<FormImput
					name="password"
					type="password"
					value={password}
					onChange={handleChange}
					label="Password"
				/>
				<FormImput
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		);
	}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (password, confirmPassword, displayName, email) =>
		dispatch(signUpStart({ password, confirmPassword, displayName, email })),
});

export default connect(null, mapDispatchToProps)(SignUp);
