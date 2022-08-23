import React, { Component } from "react";
import FormImput from "../../forminput/forminput.components";
import CustomButton from "../custom-button/custom-button.components";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async(e) =>{
		e.preventDefault();

		const { password, confirmPassword, displayName, email } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords are not the same !");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

            console.log(user);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (err) {
			console.log(err);
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<FormImput
					name="displayName"
					type="text"
					onChange={this.handleChange}
					value={displayName}
					label="Name"
				/>
				<FormImput
					name="email"
					type="email"
					value={email}
					onChange={this.handleChange}
					label="Email"
				/>
				<FormImput
					name="password"
					type="password"
					value={password}
					onChange={this.handleChange}
					label="Password"
				/>
				<FormImput
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					onChange={this.handleChange}
					label="Confirm Password"
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		);
	}
}

export default SignUp;
