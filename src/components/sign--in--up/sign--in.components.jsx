import React, { Component } from "react";

import FormImput from "../../forminput/forminput.components";
import CustomButton from "../custom-button/custom-button.components";
import {  signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form">
				<FormImput
					type="email"
					name="email"
					className="form-input"
					value={this.state.email}
					handleChange={this.handleChange}
					required
					label="Email"
				/>
				<FormImput
					type="password"
					name="password"
					className="form-input"
					value={this.state.password}
					onChange={this.handleChange}
					required
					label="Password"
				/>
				<CustomButton type="submit">Sign In</CustomButton>
				<CustomButton onClick={signInWithGoogle}>
					{""}
					Sign In With Google{""}
				</CustomButton>
			</form>
		);
	}
}

export default SignIn;
