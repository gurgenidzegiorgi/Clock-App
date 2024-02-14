import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

type Quote = {
	author: string;
	content: string;
};

const QuoteComponent = styled.div<{ $isVisible: boolean }>`
	opacity: ${({ $isVisible }) => (!$isVisible ? "1" : "0")};
	max-height: ${({ $isVisible }) => (!$isVisible ? "10rem" : "0")};
	overflow: hidden;
	transition: opacity 1s linear, max-height 1s linear;
	div {
		display: flex;
		margin-bottom: 1rem;
	}
	.quote,
	.author {
		width: 80%;
		color: #fff;
		font-size: 1.2rem;
		font-weight: 400;
		line-height: 2.2rem; /* 183.333% */
	}

	.author {
		font-weight: 700;
	}

	svg {
		fill: #fff;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		.quote,
		.author {
			width: 60%;
			font-size: 1.8rem;
			line-height: 2.8rem; /* 183.333% */
		}
	}

	@media screen and (min-width: 1440px) {
		.quote,
		.author {
			width: 52%;
		}
	}
`;

const QuoteDiv = ({ moreContent }: { moreContent: boolean }) => {
	const [quote, setQuote] = useState<Quote | null>(null);

	useEffect(() => {
		randomQuote();
	}, []);

	const randomQuote = async () => {
		const quoteData = await axios.get(
			"https://api.quotable.io/quotes/random?maxLength=100"
		);
		setQuote(quoteData.data[0]);
	};

	return (
		<QuoteComponent $isVisible={moreContent}>
			<div>
				<p className="quote">{quote?.content}</p>
				<svg
					onClick={randomQuote}
					width="18"
					height="18"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" />
				</svg>
			</div>
			<p className="author">{quote?.author}</p>
		</QuoteComponent>
	);
};

export default QuoteDiv;
