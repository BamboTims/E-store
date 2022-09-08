import React from "react";
import { ReactComponent as Logo } from "../../assets/Larkef.svg";
import { Link } from "react-router-dom";
// import "./header.styles.css";
import { connect } from "react-redux";
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
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => {
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
					<HeaderOptionDiv onClick={signOutStart} className="header-option">
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

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
