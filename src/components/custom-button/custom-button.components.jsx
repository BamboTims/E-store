import React from "react";
// import CustomButtonStyles from "./custom-button.styles";
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
