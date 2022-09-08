import React, { Component } from "react";
import FormImput from "../../forminput/forminput.components";
import CustomButton from "../custom-button/custom-button.components";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

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

	handleSubmit = async (e) => {
		e.preventDefault();
		const { signUpStart } = this.props;
		const { password, confirmPassword, displayName, email } = this.state;
		signUpStart(password, confirmPassword, displayName, email);
	};
	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

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

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (password, confirmPassword, displayName, email) =>
		dispatch(signUpStart({ password, confirmPassword, displayName, email })),
});

export default connect(null, mapDispatchToProps)(SignUp);
