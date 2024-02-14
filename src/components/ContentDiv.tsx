import { styled } from "styled-components";

import { TimezoneData } from "../types/Types";

const ContentComponent = styled.div<{
	$isVisible: boolean;
	$currentHour: string;
}>`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	margin: 0 -2.5rem;
	padding: 4.8rem 2.5rem;
	background: ${({ $currentHour }) =>
		parseInt($currentHour) > 5 && parseInt($currentHour) < 18
			? "rgba(255, 255, 255, 0.75)"
			: "rgba(0, 0, 0, 0.75)"};
	backdrop-filter: blur(0.5rem);
	opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
	max-height: ${({ $isVisible }) => ($isVisible ? "25.6rem" : "0")};
	overflow: hidden;
	transition: opacity 1s linear, max-height 1s linear;
	& * {
		overflow: hidden;
	}

	.divider {
		display: none;
		width: 0.1rem;
		height: 100%;
		opacity: 0.25;
		background: #303030;
	}
	.box {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		.content-div {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.info-title {
				color: ${({ $currentHour }) =>
					parseInt($currentHour) > 5 && parseInt($currentHour) < 18
						? "#303030"
						: "#fff"};
				font-size: 1rem;
				font-weight: 400;
				line-height: 2.8rem; /* 280% */
				letter-spacing: 0.2rem;
				text-transform: uppercase;
			}

			p {
				color: ${({ $currentHour }) =>
					parseInt($currentHour) > 5 && parseInt($currentHour) < 18
						? "#303030"
						: "#fff"};
				font-size: 1.8rem;
				font-weight: 700;
			}
		}
	}

	@media screen and (min-width: 768px) {
		flex-direction: unset;
		justify-content: space-between;
		padding: 10rem 6.4rem;
		margin: 0 0 0 -6.4rem;
		max-height: ${({ $isVisible }) => ($isVisible ? "44rem" : "0")};

		.box {
			gap: 5rem;

			.content-div {
				flex-direction: column;
				align-items: unset;

				.info-title {
					font-size: 1.3rem;
					line-height: 2.8rem;
				}

				p {
					font-size: 3rem;
				}
			}
		}
	}

	@media screen and (min-width: 1440px) {
		padding: 12rem 16.4rem 12rem 16.4rem;
		margin: 0 -16.4rem;

		.divider {
			display: block;
		}
		.box {
			.content-div {
				p {
					font-size: 4rem;
				}
			}
		}
	}
`;

const ContentDiv = ({
	dataAndTimeData,
	currentHour,
	moreContent,
}: {
	dataAndTimeData: TimezoneData;
	currentHour: string;
	moreContent: boolean;
}) => {
	return (
		<ContentComponent $isVisible={moreContent} $currentHour={currentHour}>
			<div className="box">
				<div className="content-div">
					<p className="info-title">CURRENT TIMEZONE</p>
					<p>{dataAndTimeData?.timezone}</p>
				</div>
				<div className="content-div">
					<p className="info-title">DAY OF THE YEAR</p>
					<p>{dataAndTimeData?.day_of_year}</p>
				</div>
			</div>
			<div className="divider"></div>
			<div className="box">
				<div className="content-div">
					<p className="info-title">DAY OF THE WEEK</p>
					<p>{dataAndTimeData?.day_of_week}</p>
				</div>
				<div className="content-div">
					<p className="info-title">WEEK NUMBER</p>
					<p>{dataAndTimeData?.week_number}</p>
				</div>
			</div>
		</ContentComponent>
	);
};

export default ContentDiv;
