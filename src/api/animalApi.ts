import api from "./api";

const URLS = {
	fetchDogUrl: "breeds/image/random",
	fetchCatUrl: "images/search?format=json",
};

export type DogData = {
	message: string;
	status: "success" | "error";
};

export type CatData = {
	breeds: [];
	height: number;
	id: string;
	url: string;
	width: number;
}[];

/**
 * Fetches a random dog image from the dog.ceo API.
 *
 * @return {Promise<DogData>} A promise that resolves to the dog data containing the message, status, and more.
 */

export const fetchDog = () => {
	return api.get<DogData>(URLS.fetchDogUrl, {
		baseURL: "https://dog.ceo/api/",
	});
};

/**
 * Fetches a random cat image from the cat API.
 *
 * @return {Promise<CatData>} A promise that resolves to the cat data containing the breeds, height, id, url, and width.
 */

export const fetchCat = () => {
	return api.get<CatData>(URLS.fetchCatUrl, {
		baseURL: "https://api.thecatapi.com/v1/",
	});
};
