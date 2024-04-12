import axios, { type AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import urlJoin from "url-join";

axiosRetry(axios, { retries: 3 });

export class ApiService {
	baseUrl: string = getApiBaseUrl();

	protected async get<T>(path: string): Promise<T> {
		const response = await axios.get(`${this.baseUrl}/${path}`);
		return this.getDataFromResponse<T>(response);
	}

	protected async post<T>(path: string, body: unknown): Promise<T> {
		const response = await axios.post(`${this.baseUrl}/${path}`, body);
		return this.getDataFromResponse<T>(response);
	}

	protected async put<T>(path: string, body: unknown): Promise<T> {
		const response = await axios.put(`${this.baseUrl}/${path}`, body);
		return this.getDataFromResponse<T>(response);
	}

	protected async delete<T>(path: string): Promise<T> {
		const response = await axios.delete(`${this.baseUrl}/${path}`);
		return this.getDataFromResponse<T>(response);
	}

	private async getDataFromResponse<T>(response: AxiosResponse): Promise<T> {
		const json = (await response.data) as { data: T };
		return json.data;
	}
}

function getApiBaseUrl(): string {
	const url = process.env.NEXT_PUBLIC_API_URL;

	if (!url) {
		throw new Error(
			"NEXT_PUBLIC_API_URL is not defined. Please define it in a .env file.",
		);
	}
	return urlJoin(url, "api", "1");
}
