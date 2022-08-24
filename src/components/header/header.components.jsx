import React from "react";
import { ReactComponent as Logo } from "../../assets/Larkef.svg";
import { Link } from "react-router-dom";
// import "./header.styles.css";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
	HeaderOption,
	HeaderOptionDiv,
	HeaderOptions,
	HeaderContainer,
	LogoContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Link to="/">
					<Logo className="logo" />
				</Link>
			</LogoContainer>
			<HeaderOptions>
				<HeaderOption className="header-option" to="/shop">
					SHOP
				</HeaderOption>
				<HeaderOption className="header-option" to="/j">
					CONTACT
				</HeaderOption>
				{currentUser ? (
					<HeaderOptionDiv
						onClick={() => auth.signOut()}
						className="header-option"
					>
						SIGN OUT
					</HeaderOptionDiv>
				) : (
					<HeaderOption className="header-option" to="/signin">
						SIGN IN
					</HeaderOption>
				)}

				<CartIcon />
			</HeaderOptions>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
