import React, { useEffect } from "react";
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
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { useDispatch, useSelector } from "react-redux/es/exports";

const App = () => {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [checkUserSession]);

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
						render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
					/>
					<Route
						exact
						path="/signup"
						render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
					/>
					<Route exact path="/checkout" component={CheckoutPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;