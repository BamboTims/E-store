import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.components";
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect,
} from "react-router-dom";
import Header from "./components/header/header.components";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.components";

const ShopPage = lazy(() => import("./pages/shop/shop.components"));
const SignInPage = lazy(() => import("./pages/sign-in-up/sign-in.components"));
const SignUpPage = lazy(() => import("./pages/sign-in-up/sign-up.components"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.components"));

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
					<ErrorBoundary>
						<Suspense fallback={<Spinner />}>
							<Route exact path="/" component={Homepage} />
							<Route path="/shop" component={ShopPage} />
							<Route
								exact
								path="/signin"
								render={() =>
									currentUser ? <Redirect to="/" /> : <SignInPage />
								}
							/>
							<Route
								exact
								path="/signup"
								render={() =>
									currentUser ? <Redirect to="/" /> : <SignUpPage />
								}
							/>
							<Route exact path="/checkout" component={CheckoutPage} />
						</Suspense>
					</ErrorBoundary>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
