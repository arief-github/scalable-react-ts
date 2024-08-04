import { useState, useMemo } from "react";
import { IDLE, defaultApiStatuses, ApiStatus } from "@/constants/apiStatus";

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Generates a record of boolean values indicating whether each status in `defaultApiStatuses` matches the `currentStatus`.
 *
 * @param {ApiStatus} currentStatus - The current status to compare against.
 * @return {Statuses} A record of boolean values indicating whether each status matches the `currentStatus`.
 */

const prepareStatuses = (currentStatus: ApiStatus): Statuses => {
	const statuses = {} as Statuses;

	for (const status of defaultApiStatuses) {
		const normalisedStatus = capitalize(status.toLowerCase());
		const normalisedStatusKey = `is${normalisedStatus}` as keyof Statuses;
		statuses[normalisedStatusKey] = status === currentStatus;
	}

	return statuses;
};

export const useApiStatus = (currentStatus: ApiStatus = IDLE) => {
	const [status, setStatus] = useState<ApiStatus>(currentStatus);
	const statuses = useMemo(() => prepareStatuses(status), [status]);

	return {
		status,
		setStatus,
		...statuses,
	};
};
