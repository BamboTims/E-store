import React from "react";
import CollectionItem from "../collection-item/collection-item.components";
import { useHistory, useRouteMatch } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.components";
import "./collection-preview.styles.css";

const CollectionPreview = ({ title, items }) => {
	const history = useHistory();
	const match = useRouteMatch();
	return (
		<div className=" collection-preview">
			<h1 className="title">{title}</h1>
			<div className="collection">
				{items
					.filter((_, idx) => idx < 4)
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

export default CollectionPreview;
