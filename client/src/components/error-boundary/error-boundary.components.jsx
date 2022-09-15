import React, { Component } from "react";

import {
	TextContainer,
	ImageContainer,
	ErrorPage,
} from "./error-boundary.styles";

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorPage>
					<ImageContainer imageUrl="https://d2pas86kykpvmq.cloudfront.net/images/index/freebie-24-v1.png" />
					<TextContainer>
						Something weird happened !
					</TextContainer>
				</ErrorPage>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
