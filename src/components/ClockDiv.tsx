/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { styled } from "styled-components";

import Button from "./Button";

import sunSvg from "../assets/images/icon-sun.svg";
import moonSvg from "../assets/images/icon-moon.svg";

type CurrentTime = {
	hour: string;
	minute: string;
	abbreviation: string;
};

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


const ClockDiv = ({
	currentTime,
	setMoreContent,
	moreContent,
	geoLocation,
	dataAndTimeData,
}: {
	currentTime: CurrentTime;
	geoLocation: { city: string; countryCode: string };
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
