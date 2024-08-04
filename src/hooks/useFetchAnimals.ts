import { fetchCat, fetchDog } from "@/api/animalApi";
import { useState, useEffect } from "react";
import { withAsync } from "@/helpers/withAsync";
import { IDLE, PENDING, SUCCESS, ERROR } from "@/constants/apiStatus";
import { useApiStatus } from "./useApiStatuses";

const useFetchDog = () => {
	const [dog, setDog] = useState<string>();
	const {
		status: fetchDogStatus,
		setStatus: setFetchDogStatus,
		isIdle: isFetchDogStatusIdle,
		isPending: isFetchDogStatusPending,
		isError: isFetchDogStatusError,
		isSuccess: isFetchDogStatusSuccess,
	} = useApiStatus(IDLE);

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
		isFetchDogStatusError,
		isFetchDogStatusPending,
		isFetchDogStatusIdle,
		isFetchDogStatusSuccess,
	};
};

const useFetchCat = () => {
	const [cat, setCat] = useState<string>();

	const {
		status: fetchCatStatus,
		setStatus: setFetchCatStatus,
		isIdle: isFetchCatStatusIdle,
		isError: isFetchCatStatusError,
		isPending: isFetchCatStatusPending,
		isSuccess: isFetchCatStatusSuccess,
	} = useApiStatus(IDLE);

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
		isFetchCatStatusError,
		isFetchCatStatusPending,
		isFetchCatStatusIdle,
		isFetchCatStatusSuccess,
	};
};

const useFetchAnimals = () => {
	const {
		dog,
		fetchDogStatus,
		initFetchDog,
		isFetchDogStatusIdle,
		isFetchDogStatusError,
		isFetchDogStatusPending,
		isFetchDogStatusSuccess,
	} = useFetchDog();
	const {
		cat,
		fetchCatStatus,
		initFetchCat,
		isFetchCatStatusIdle,
		isFetchCatStatusError,
		isFetchCatStatusPending,
		isFetchCatStatusSuccess,
	} = useFetchCat();

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
		isFetchDogStatusIdle,
		isFetchDogStatusError,
		isFetchDogStatusSuccess,
		isFetchDogStatusPending,
		isFetchCatStatusPending,
		isFetchCatStatusIdle,
		isFetchCatStatusError,
		isFetchCatStatusSuccess,
	};
};

export default useFetchAnimals;
