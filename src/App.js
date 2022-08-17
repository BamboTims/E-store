import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.components";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.components";
import SignInPage from "./pages/sign-in-up/sign-in.components";
import SignUpPage from "./pages/sign-in-up/sign-up.components";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<Router>
				<Header currentUser = {this.state.currentUser} />
				<div>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/signin" component={SignInPage} />
						<Route path="/signup" component={SignUpPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
