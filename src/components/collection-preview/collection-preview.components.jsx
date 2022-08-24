import React from "react";
import CollectionItem from "../collection-item/collection-item.components";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.components";
import "./collection-preview.styles.css";

const CollectionPreview = ({ title, items, history, match }) => {
	return (
		<div className=" collection-preview">
			<h1 className="title">{title}</h1>
			<div className="collection">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
			<CustomButton
				onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
			>{`More ${title} ...`}</CustomButton>
		</div>
	);
};

export default withRouter(CollectionPreview);
