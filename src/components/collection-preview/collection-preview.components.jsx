import React from "react";
import CollectionItem from "../collection-item/collection-item.components";
import './collection-preview.styles.css'

const CollectionPreview = ({ title, items }) => {
	return (
		<div className=" collection-preview">
			<h1 className="title">{title}</h1>
			<div className="collection">
				{items
					.filter((item, idx) => idx < 4)
					.map(({id, ...otherItemProps}) => (
						<CollectionItem key={id} {...otherItemProps}/>
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
