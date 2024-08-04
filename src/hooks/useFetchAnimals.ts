import { fetchCat, fetchDog } from "@/api/animalApi";
import { useState, useEffect } from "react";

type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

const useFetchDog = () => {
	const [dog, setDog] = useState<string>();
	const [fetchDogStatus, setFetchDogStatus] = useState<ApiStatus>("IDLE");

	const initFetchDog = async () => {
		try {
			setFetchDogStatus("PENDING");
			const response = await fetchDog();
			setDog(response.data.message);
			setFetchDogStatus("SUCCESS");
		} catch (e) {
			setFetchDogStatus("ERROR");
		}
	};
	return {
		dog,
		fetchDogStatus,
		initFetchDog,
	};
};

const useFetchCat = () => {
	const [cat, setCat] = useState<string>();
	const [fetchCatStatus, setFetchCatStatus] = useState<ApiStatus>("IDLE");

	const initFetchCat = async () => {
		try {
			setFetchCatStatus("PENDING");
			const response = await fetchCat();
			setCat(response.data?.[0].url);
			setFetchCatStatus("SUCCESS");
		} catch (e) {
			setFetchCatStatus("ERROR");
		}
	};

	return {
		cat,
		initFetchCat,
		fetchCatStatus,
	};
};

const useFetchAnimals = () => {
	const { dog, fetchDogStatus, initFetchDog } = useFetchDog();
	const { cat, fetchCatStatus, initFetchCat } = useFetchCat();

	const fetchAnimals = () => {
		initFetchDog();
		initFetchCat();
	};

	useEffect(() => {
		fetchAnimals();
	}, []);

	return {
		dog,
		cat,
		fetchAnimals,
		fetchCatStatus,
		fetchDogStatus,
	};
};

export default useFetchAnimals;
