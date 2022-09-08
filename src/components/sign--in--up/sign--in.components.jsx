import React, { useState } from "react";
import "./sign--in.styles.css";
import { ReactComponent as Google } from "../../assets/google-svgrepo-com.svg";
import FormImput from "../../forminput/forminput.components";
import CustomButton from "../custom-button/custom-button.components";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;
	const handleSubmit = async (e) => {
		e.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<FormImput
				type="email"
				name="email"
				value={email}
				handleChange={handleChange}
				required
				label="Email"
			/>
			<FormImput
				type="password"
				name="password"
				value={password}
				onChange={handleChange}
				required
				label="Password"
			/>
			<div className="buttons">
				<CustomButton type="submit">Sign In</CustomButton>
				<CustomButton type="button" signWithGoogle onClick={googleSignInStart}>
					Sign In With Google
					<Google />
				</CustomButton>
			</div>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
