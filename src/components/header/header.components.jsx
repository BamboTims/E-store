import React from "react";
import { ReactComponent as Logo } from "../../assets/Larkef x Rareblocks _ Logo #25.svg";
import { Link } from "react-router-dom";
import "./header.styles.css";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<div className="header-logo">
				<Link to="/">
					<Logo className="logo" />
				</Link>
			</div>
			<div className="header-options">
				<Link className="header-option" to="/shop">
					SHOP
				</Link>
				<Link className="header-option" to="/j">
					CONTACT
				</Link>
				{currentUser ? (
					<div onClick={() => auth.signOut()} className="header-option">
						SIGN OUT
					</div>
				) : (
					<Link className="header-option" to="/signin">
						SIGN IN
					</Link>
				)}

				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
