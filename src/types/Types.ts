export type TimezoneData = {
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

export type CurrentTime = {
	hour: string;
	minute: string;
	abbreviation: string;
};

export type GeoLocationData = {
	as: string;
	city: string;
	country: string;
	countryCode: string;
	isp: string;
	lat: number;
	lon: number;
	org: string;
	query: string;
	region: string;
	regionName: string;
	status: string;
	timezone: string;
	zip: string;
};

export type Quote = {
	author: string;
	content: string;
};
