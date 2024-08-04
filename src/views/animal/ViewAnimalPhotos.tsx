import useFetchAnimals from "@/hooks/useFetchAnimals";

function ViewAnimalPhotos() {
	const {
		dog,
		isFetchDogStatusError,
		isFetchDogStatusPending,
		isFetchDogStatusIdle,
		isFetchDogStatusSuccess,
		cat,
		isFetchCatStatusIdle,
		isFetchCatStatusPending,
		isFetchCatStatusError,
		isFetchCatStatusSuccess,
		fetchAnimals,
	} = useFetchAnimals();

	return (
		<div className='my-8 mx-auto max-w-2xl'>
			<div className='flex justify-center gap-8'>
				{isFetchDogStatusIdle || isFetchCatStatusIdle ? <p>Selamat Datang</p> : null}
				{isFetchDogStatusPending || isFetchCatStatusPending ? <p>Memuat data....</p> : null}
				{isFetchDogStatusError || isFetchCatStatusError ? <p>Ada Masalah saat memuat data</p> : null}
				{isFetchDogStatusSuccess || isFetchCatStatusSuccess ? (
					<div className='flex gap-8'>
						<div className='w-100'>{cat ? <img className='h-64 w-full object-cover' src={cat} /> : null}</div>
						<div className='w-100'>{dog ? <img className='h-64 w-full object-cover' src={dog} /> : null}</div>
					</div>
				) : null}
			</div>

			<button
				disabled={isFetchCatStatusPending || isFetchDogStatusPending}
				className='mt-4 bg-blue-800 text-blue-100 p-4'
				onClick={fetchAnimals}
			>
				{isFetchCatStatusPending || isFetchDogStatusPending ? "Memuat..." : "Fetch Animals"}
			</button>
		</div>
	);
}

export default ViewAnimalPhotos;
