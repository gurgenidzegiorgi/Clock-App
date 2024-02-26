import axios from "axios";

const apiService = axios.create({
	baseURL: "https://worldtimeapi.org/api",
});

export const getDateTimeForTimeZone = async (timezone: string) => {
	try {
		const response = await apiService.get(`/timezone/${timezone}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching date and time:", error);
		throw error;
	}
};

export const getGeoLocation = async () => {
	try {
		const response = await axios.get("https://ipwho.is/");
		return response.data;
	} catch (error) {
		console.error("Error fetching geolocation:", error);
		throw error;
	}
};
