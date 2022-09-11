import React from "react";
import { ReactComponent as Logo } from "../../assets/Larkef.svg";
import { Link } from "react-router-dom";
// import "./header.styles.css";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
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
import { useDispatch, useSelector } from "react-redux/es/exports";

const Header = () => {
	const currentUser = useSelector(selectCurrentUser);
	const hidden = useSelector(selectCartHidden);
	const dispatch = useDispatch();

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
						onClick={() => dispatch(signOutStart())}
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

export default Header;
