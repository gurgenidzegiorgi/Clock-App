import { styled } from "styled-components";

type TimezoneData = {
	abbreviation: string;
	client_ip: string;
	datetime: string; // ISO 8601 formatted date-time string
	day_of_week: number;
	day_of_year: number;
	dst: boolean;
	dst_from: null;
	dst_offset: number;
	dst_until: null;
	raw_offset: number;
	timezone: string;
	unixtime: number;
	utc_datetime: string; // ISO 8601 formatted date-time string
	utc_offset: string; // String representing time zone offset
	week_number: number;
};

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
