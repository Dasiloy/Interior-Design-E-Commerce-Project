import { useQuery } from "react-query";
import axiosClient from "../../utilis/api";
import { apiUrl } from "../../utilis/helpers";

function getProducts({ queryKey }) {
	const filters = queryKey[1];
	if (filters) {
		console.log(filters);
		let prepend = "?";
		for (const key in filters) {
			if (Object.hasOwnProperty.call(filters, key)) {
				const term = filters[key];
				prepend += `${key}=${term}&`;
			}
		}
		return axiosClient.get(`${apiUrl}/products${prepend}`);
	}
	return axiosClient.get(`${apiUrl}/products`);
}

function useGetProducts(filters) {
	return useQuery(["products", filters], params => getProducts(params), {
		// onSuccess: res => console.log(res),
		onError: err => console.log(err),
	});
}

export default useGetProducts;
