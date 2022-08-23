import React from "react";
import "./forminput.styles.css";

const FormImput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="field">
			<input className="form-input" onChange={handleChange} {...otherProps} />
			{label ? (
				<label
					className={`${
						otherProps.value.length > 0 ? "shrink" : ""
					} form-label`}
				>
					{label}
				</label>
			) : (
				""
			)}
		</div>
	);
};

export default FormImput;
