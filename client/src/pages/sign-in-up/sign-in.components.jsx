import React from "react";
import SignIn from "../../components/sign--in--up/sign--in.components";
import './sign-in.styles.css'
import { Link } from "react-router-dom";

const SignInPage = () => {
	return (
		<div className="sign-in">
			<h1>Have an account ?</h1>
			<span>Sign in with your email and password</span>
			<SignIn />
			<span>Don't have an account ? <Link to="/signup">Create</Link> </span>
		</div>
	);
};
export default SignInPage;
