import React, { Component } from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";

class ShopPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collection: SHOP_DATA,
		};
	}

	render() {
		const { collection } = this.state;
		return (
			<div className="shop">
				{collection.map(({ id, ...otherCollectionsProps }) => (
					<CollectionPreview key={id} {...otherCollectionsProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
