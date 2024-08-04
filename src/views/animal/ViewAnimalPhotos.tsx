import useFetchAnimals from "@/hooks/useFetchAnimals";
import { IDLE, PENDING, ERROR, SUCCESS } from "@/constants/apiStatus";

function ViewAnimalPhotos() {
	const { dog, fetchDogStatus, cat, fetchCatStatus, fetchAnimals } = useFetchAnimals();

	return (
		<div className='my-8 mx-auto max-w-2xl'>
			<div className='flex justify-center gap-8'>
				{fetchDogStatus === IDLE || fetchCatStatus === IDLE ? <p>Selamat Datang</p> : null}
				{fetchDogStatus === PENDING || fetchCatStatus === PENDING ? <p>Memuat data....</p> : null}
				{fetchDogStatus === ERROR || fetchCatStatus === ERROR ? <p>Ada Masalah saat memuat data</p> : null}
				{fetchDogStatus === SUCCESS || fetchCatStatus === SUCCESS ? (
					<div className='flex gap-8'>
						<div className='w-100'>{cat ? <img className='h-64 w-full object-cover' src={cat} /> : null}</div>
						<div className='w-100'>{dog ? <img className='h-64 w-full object-cover' src={dog} /> : null}</div>
					</div>
				) : null}
			</div>

			<button className='mt-4 bg-blue-800 text-blue-100 p-4' onClick={fetchAnimals}>
				Fetch Animals
			</button>
		</div>
	);
}

export default ViewAnimalPhotos;
