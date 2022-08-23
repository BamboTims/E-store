import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({
	children,
	signWithGoogle,
	inverted,
	...otherProps
}) => {
	return (
		<button
			className={`${inverted ? "inverted" : ""} ${
				signWithGoogle ? "signWithGoogle" : ""
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
