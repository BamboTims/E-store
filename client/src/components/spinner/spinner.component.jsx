import React from "react";

import { Spinner, SpinnerOverlay } from "./with-spinner.styles";

const Spinner = () => {
	return (
		<SpinnerOverlay>
			<Spinner />
		</SpinnerOverlay>
	);
};

export default Spinner;
