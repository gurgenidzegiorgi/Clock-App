/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { createGlobalStyle, styled } from "styled-components";

import { getDateTimeForTimeZone, getGeoLocation } from "./API/APIservice";
import { TimezoneData, GeoLocationData, CurrentTime } from "./types/Types";

import QuoteDiv from "./components/QuoteDiv";
import ClockDiv from "./components/ClockDiv";
import ContentDiv from "./components/ContentDiv";

import bgSunny from "./assets/images/bg-day.jpeg";

const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'Inter', sans-serif;
		height: 100vh;
		height: 100dvh;
		background:url(${bgSunny});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		}

	:root {
    --rem: 10;
	}

	* {
		font-size: 62.5%;
		overflow-x: hidden;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}


`;

const Container = styled.div<{ $moreContent: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	height: 100dvh;
	padding: 3.2rem 2.5rem 0rem 2.5rem;

	@media screen and (min-width: 768px) {
		padding: 8rem 0rem 0rem 6.4rem;
	}

	@media screen and (min-width: 1440px) {
		padding: 5.6rem 16.5rem 0 16.5rem;
	}
`;

function App() {
	const [dataAndTimeData, setDataAndTimeData] = useState<TimezoneData | null>(
		null
	);
	const [currentTime, setCurrentTime] = useState<CurrentTime | null>(null);
	const [geoLocation, setGeoLocation] = useState<GeoLocationData | null>(null);
	const [moreContent, setMoreContent] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const geoLocationData = await getGeoLocation();
				const dataAndTime = await getDateTimeForTimeZone(
					geoLocationData?.timezone.id
				);
				const currentTime = new Date(dataAndTime?.datetime).toLocaleString(
					"en-US",
					{
						hour: "2-digit",
						minute: "2-digit",
						hour12: false,
					}
				);
				const [currentHour, currentMinute] = currentTime.split(":");
				setCurrentTime({
					hour: currentHour,
					minute: currentMinute,
					abbreviation: dataAndTime?.abbreviation,
				});
				setDataAndTimeData(dataAndTime);
				setGeoLocation(geoLocationData);
			} catch (error) {
				console.error("Error recieving Data", error);
				throw error;
			}
		};

		fetchData();
	}, []);

	return (
		<Container $moreContent={moreContent}>
			<GlobalStyles />
			<QuoteDiv moreContent={moreContent} />
			<ClockDiv
				currentTime={currentTime}
				setMoreContent={setMoreContent}
				moreContent={moreContent}
				dataAndTimeData={dataAndTimeData}
				geoLocation={geoLocation}
			/>
			<ContentDiv
				moreContent={moreContent}
				currentHour={currentTime?.hour}
				dataAndTimeData={dataAndTimeData}
			/>
		</Container>
	);
}

export default App;
