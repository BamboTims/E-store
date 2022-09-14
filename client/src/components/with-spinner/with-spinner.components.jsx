import React from "react";

import Spinner from "../spinner/spinner.component";

const withSpinner = (WrappedComp) => {
	const LoadSpinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? <Spinner /> : <WrappedComp {...otherProps} />;
	};
	return LoadSpinner;
};

export default withSpinner;
