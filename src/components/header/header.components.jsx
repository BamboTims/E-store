import React from "react";
import { ReactComponent as Logo } from "../../assets/Larkef x Rareblocks _ Logo #25.svg";
import { Link } from "react-router-dom";
import "./header.styles.css";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
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
					<div onClick={()=>auth.signOut()} className="header-option">SIGN OUT</div>
				) : (
					<Link className="header-option" to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
