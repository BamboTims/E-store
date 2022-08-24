import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const headerOptionStyles = css`
	padding: 1rem;
	font-size: 1.5rem;
	cursor: pointer;
`;

export const HeaderContainer = styled.div`
	width: 100%;
	height: 7rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

export const HeaderOptions = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const HeaderOption = styled(Link)`
	${headerOptionStyles}
`;

export const HeaderOptionDiv = styled.div`
	${headerOptionStyles}
`;

export const LogoContainer = styled.div`
	height: 100%;
	width: 7rem;
	padding: 1rem;

	.logo {
		height: 100%;
		width: 100%;

		&:focus {
			outline: 0;
		}
	}
`;
