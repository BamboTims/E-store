import styled from "styled-components";

export const SpinnerOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Spinner = styled.div`
  height: 50px;
  width: 50px;
  border: 3px solid grey;
  border-top-color: black;
  border-radius: 50%;
  -webkit-animation: spin 1s ease-in infinite;
          animation: spin 1s ease-in infinite;
}
@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
