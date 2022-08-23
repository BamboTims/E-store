import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../../components/sign--in--up/sign--up.components";
import "./sign-up.styles.css"

const SignUpPage = () => {
	return (
		<div className="sign-up">
			<h2>Create An Account</h2>
			<span>Input Your Details</span>
			<SignUp />
			<span>
				Have an account ? <Link to="/signin">Sign in</Link>{" "}
			</span>
		</div>
	);
};

export default SignUpPage;
