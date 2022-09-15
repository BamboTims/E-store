import styled from "styled-components";

export const ErrorPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ImageContainer = styled.div`
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	width: 40rem;
    height: 40rem;
	background-size: cover;
	border-radius: 3px;
`;

export const TextContainer = styled.p`
	font-size: 2rem;
	padding: 2rem;
    text-transform: uppercase;
`;
