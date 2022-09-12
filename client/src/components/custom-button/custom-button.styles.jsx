import styled, { css } from "styled-components";

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
	}
`;

const defaultButtonStyle = css`
	background-color: black;
	color: white;

	&:hover {
		background-color: white;
		color: black;
	}
`;

const signInWithGoogleStyle = css`
	display: flex;
	align-items: center;
	background-color: bisque;
	color: black;

	svg {
		height: 1.8rem;
		margin-left: 1rem;
	}

	&:hover {
		background-color: darkgrey;
		color: white;
	}
`;

const getStyles = (props) => {
	if (props.inverted) return `${invertedButtonStyles}`;

	return (props.signInWithGoogle) ? `${signInWithGoogleStyle}` : `${defaultButtonStyle}`;
};

const CustomButtonStyles = styled.button`
	min-width: 1.5rem;
	text-transform: uppercase;
	background-color: black;
	color: white;
	font-size: 1.5rem;
	letter-spacing: 0.5px;
	padding: 1.5rem 3rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	transition: 0.3s all ease-in;

	&:focus {
		outline: 0;
		transform: scale(0.95);
	}

	${getStyles}
`;

export default CustomButtonStyles;
