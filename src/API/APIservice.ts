import axios from "axios";

const apiService = axios.create({
	baseURL: "http://worldtimeapi.org/api",
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
		const response = await axios.get("http://ip-api.com/json");
		return response.data;
	} catch (error) {
		console.error("Error fetching geolocation:", error);
		throw error;
	}
};
