import React from "react";
import "./menu-items.styles.css";
import { useHistory, useRouteMatch } from "react-router-dom";

const Menuitem = ({ title, url, linkurl, size }) => {
	const history = useHistory();
	const match = useRouteMatch();

	return (
		<div
			className={`${size} menu-item`}
			onClick={() => history.push(`${match.url}${linkurl}`)}
		>
			<div
				style={{ backgroundImage: `url(${url})` }}
				className="background-image"
			/>
			<div className="menu-content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW !</span>
			</div>
		</div>
	);
};

export default Menuitem;
