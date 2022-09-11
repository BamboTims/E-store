import React from "react";
import "./directory.styles.css";
import Menuitem from "../menu-item/menu-item.components";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { useSelector } from "react-redux/es/exports";

const Directory = () => {
	const sections = useSelector(selectDirectorySections);
	return (
		<div className="menu">
			{sections.map(({ id, ...otherSectionProps }) => (
				<Menuitem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

export default Directory;
