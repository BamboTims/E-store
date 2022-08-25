import React from "react";
import { Spinner, SpinnerOverlay } from "./with-spinner.styles";

const withSpinner = (WrappedComp) => {
	const LoadSpinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<Spinner />
			</SpinnerOverlay>
		) : (
			<WrappedComp {...otherProps} />
		);
	};
	return LoadSpinner;
};

export default withSpinner;
