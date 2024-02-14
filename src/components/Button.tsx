/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler } from "react";
import { styled } from "styled-components";

const ButtonComponent = styled.button`
	position: relative;
	border-radius: 2.8rem;
	background: #fff;
	padding: 1.3rem 5.1rem 1.3rem 2.1rem;
	color: #000;
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1.4rem; /* 116.667% */
	letter-spacing: 0.375rem;
	text-transform: uppercase;
	width: min-content;
	border: none;
	cursor: pointer;
	transition: all 0.5s linear;

	&:focus-visible {
		outline: none;
	}

	.arrow-icon {
		position: absolute;
		top: 50%;
		right: 0.4rem;
		opacity: 1;
		transform: translateY(-50%);
		fill: #303030;
		transition: all 0.5s linear;

		&:hover {
			transition: all 0.5s linear;
			fill: #999;
		}
	}

	.arrow-icon.rotate {
		transform: translateY(-50%) rotate(180deg);
		transition: all 0.5s linear;
	}
`;

const Button = ({
	moreContent,
	handleMoreContent,
}: {
	moreContent: boolean;
	handleMoreContent: MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<ButtonComponent onClick={handleMoreContent}>
			{`MORE`}
			<svg
				className={moreContent ? "arrow-icon rotate" : "arrow-icon"}
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
			>
				<circle cx="16" cy="16" r="16" />
				<path
					d="M11.2 18.3999L16 13.5999L20.8 18.3999"
					stroke="white"
					strokeWidth="2"
				/>
			</svg>
		</ButtonComponent>
	);
};

export default Button;
