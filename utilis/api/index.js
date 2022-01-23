import axios from "axios";
import { apiUrl } from "../helpers";

const axiosClient = axios.create({
	baseURL: apiUrl,
	headers: {
		accept: "*/*",
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.request.use(
	config => {
		config.headers.Authorization = `Bearer Token`;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.response.use(
	response => {
		return response;
	},
	err => err
);

export default axiosClient;
