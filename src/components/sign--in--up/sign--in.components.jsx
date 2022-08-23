import React, { Component } from "react";
import "./sign--in.styles.css";
import { ReactComponent as Google } from "../../assets/google-svgrepo-com.svg";
import FormImput from "../../forminput/forminput.components";
import CustomButton from "../custom-button/custom-button.components";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;
		await auth.signInWithEmailAndPassword(email, password);

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
					value={this.state.email}
					handleChange={this.handleChange}
					required
					label="Email"
				/>
				<FormImput
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
					required
					label="Password"
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton type="button" signWithGoogle onClick={signInWithGoogle}>
						Sign In With Google
						<Google />
					</CustomButton>
				</div>
			</form>
		);
	}
}

export default SignIn;
