import React from "react";
import "./directory.styles.css";
import Menuitem from "../menu-item/menu-item.components";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
	return (
		<div className="menu">
			{sections.map(({ id, ...otherSectionProps }) => (
				<Menuitem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
