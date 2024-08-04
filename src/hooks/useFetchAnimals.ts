import { fetchCat, fetchDog } from "@/api/animalApi";
import { useState, useEffect } from "react";
import { withAsync } from "@/helpers/withAsync";
import { IDLE, PENDING, SUCCESS, ERROR, ApiStatus } from "@/constants/apiStatus";

const useFetchDog = () => {
	const [dog, setDog] = useState<string>();
	const [fetchDogStatus, setFetchDogStatus] = useState<ApiStatus>(IDLE);

	const initFetchDog = async () => {
		setFetchDogStatus(PENDING);

		const { response, error } = await withAsync(() => fetchDog());

		if (error) {
			setFetchDogStatus(ERROR);
		} else if (response) {
			setDog(response.data.message);
			setFetchDogStatus(SUCCESS);
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
	const [fetchCatStatus, setFetchCatStatus] = useState<ApiStatus>(IDLE);

	const initFetchCat = async () => {
		setFetchCatStatus(PENDING);
		const { response, error } = await withAsync(() => fetchCat());
		if (error) {
			setFetchCatStatus(ERROR);
		} else if (response) {
			setCat(response.data[0].url);
			setFetchCatStatus(SUCCESS);
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
