import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.components";
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect,
} from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.components";
import SignInPage from "./pages/sign-in-up/sign-in.components";
import SignUpPage from "./pages/sign-in-up/sign-up.components";
import CheckoutPage from "./pages/checkout/checkout.components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectShopCollectionsForPreview } from "./redux/shop/shop.selectors";

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser(
						{
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						},
						() => {
							console.log(this.state);
						}
					);
				});
			}
			setCurrentUser(userAuth);
			//// addCollectionAndDocuments(
			//// 	"collections",
			//// 	collectionsArr.map(({ title, items }) => ({ title, items }))
			//// );Upload data to database
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<Router>
				<Header />
				<div>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/shop" component={ShopPage} />
						<Route
							exact
							path="/signin"
							render={() =>
								this.props.currentUser ? <Redirect to="/" /> : <SignInPage />
							}
						/>
						<Route
							exact
							path="/signup"
							render={() =>
								this.props.currentUser ? <Redirect to="/" /> : <SignUpPage />
							}
						/>
						<Route exact path="/checkout" component={CheckoutPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArr: selectShopCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
