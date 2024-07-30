import useFetchAnimals from "@/hooks/useFetchAnimals";

function ViewAnimalPhotos() {
	const { dog, cat, fetchAnimals } = useFetchAnimals();

	return (
		<div className='my-8 mx-auto max-w-2xl'>
			<div className='flex gap-8'>
				<div className='w-1/2'>{cat ? <img className='h-64 w-full object-cover' src={cat} /> : null}</div>
				<div className='w-1/2'>{dog ? <img className='h-64 w-full object-cover' src={dog} /> : null}</div>
			</div>

			<button className='mt-4 bg-blue-800 text-blue-100 p-4' onClick={fetchAnimals}>
				Fetch Animals
			</button>
		</div>
	);
}

export default ViewAnimalPhotos;
