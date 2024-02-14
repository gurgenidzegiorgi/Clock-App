/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { styled } from "styled-components";

import { CurrentTime, GeoLocationData } from "../types/Types";
import Button from "./Button";

import sunSvg from "../assets/images/icon-sun.svg";
import moonSvg from "../assets/images/icon-moon.svg";

const ClockComponent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4.8rem;
	& * {
		overflow: hidden;
	}

	span {
		display: flex;
		flex-direction: column;
	}

	.greeting-div {
		display: flex;
		align-items: center;
		gap: 1.6rem;

		p,
		span {
			color: #fff;
			font-size: 1.5rem;
			font-weight: 400;
			line-height: 2.5rem; /* 166.667% */
			letter-spacing: 0.3rem;
			text-transform: uppercase;
		}
		span {
			display: none;
		}
	}

	.time-div {
		display: flex;
		align-items: baseline;
		gap: 1.3rem;
		p {
			color: #fff;
			font-size: 10rem;
			font-style: normal;
			font-weight: 700;
			line-height: 10rem; /* 100% */
			letter-spacing: -0.25rem;
			overflow-y: hidden;
		}

		span {
			color: #fff;
			font-size: 1.5rem;
			font-weight: 300;
			line-height: 2.8rem; /* 186.667% */
			text-transform: uppercase;
		}
	}
	.location {
		color: #fff;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 2.8rem; /* 186.667% */
		letter-spacing: 0.3rem;
		text-transform: uppercase;
	}

	@media screen and (min-width: 768px) {
		.greeting-div {
			div {
				display: flex;

				span {
					display: block;
				}

				p,
				span {
					font-size: 1.8rem;
					line-height: 2.8rem;
					letter-spacing: 0.36rem;
				}
			}
		}
		.time-div {
			p {
				font-size: 15rem;
				line-height: 15rem; /* 100% */
				letter-spacing: -0.4375rem;
			}

			span {
				font-size: 3.2rem;
			}
		}
		.location {
			font-size: 1.8rem;
			letter-spacing: 0.36rem;
		}
	}

	@media screen and (min-width: 1440px) {
		flex-direction: unset;
		align-items: flex-end;
		justify-content: space-between;
		.greeting-div {
			p,
			span {
				font-size: 2rem;
			}
		}
		.time-div {
			p {
				font-size: 20rem;
				line-height: 20rem; /* 100% */
				letter-spacing: -0.4375rem;
			}

			span {
				font-size: 4rem;
			}
		}
		.location {
			font-size: 2.4rem;
			line-height: 2.8rem;
		}
	}
`;

const ClockDiv = ({
	currentTime,
	setMoreContent,
	moreContent,
	geoLocation,
	dataAndTimeData,
}: {
	currentTime: CurrentTime;
	geoLocation: GeoLocationData;
	setMoreContent: Function;
	moreContent: boolean;
	dataAndTimeData: object;
}) => {
	function Greeting() {
		const currentHour = parseInt(currentTime?.hour ?? "0");
		let greetingMessage: string;

		if (currentHour >= 5 && currentHour < 12) {
			greetingMessage = "Good morning";
		} else if (currentHour >= 12 && currentHour < 18) {
			greetingMessage = "Good afternoon";
		} else {
			greetingMessage = "Good evening";
		}

		return greetingMessage;
	}
	const greetingMessage = Greeting();

	const handleMoreContent = () => {
		setMoreContent(!moreContent);
	};
	return (
		<ClockComponent>
			<span>
				<div className="greeting-div">
					{parseInt(currentTime?.hour ?? "0") >= 5 &&
					parseInt(currentTime?.hour ?? "0") <= 18 ? (
						<img src={sunSvg} />
					) : (
						<img src={moonSvg} />
					)}
					<div>
						<p>{greetingMessage}</p>
						<span>, IT's CURRENTLY</span>
					</div>
				</div>
				<div className="time-div">
					<p>
						{dataAndTimeData && `${currentTime?.hour}:${currentTime?.minute}`}
					</p>
					<span>{currentTime?.abbreviation}</span>
				</div>
				<p className="location">
					{geoLocation &&
						`IN ${geoLocation?.city}, ${geoLocation?.countryCode}`.toUpperCase()}
				</p>
			</span>
			<Button handleMoreContent={handleMoreContent} moreContent={moreContent} />
		</ClockComponent>
	);
};

export default ClockDiv;
