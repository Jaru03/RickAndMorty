const LocationInfo = ({location}) => {
  return (
    <article className="w-5/6 h-32 flex justify-center flex-col mx-auto bg-card-rickandmorty items-center rounded-2xl shadow-xl">
        <h1 className="text-text-lime font-semibold text-xl my-1">{location?.name}</h1>
        <ul className="w-full text-white grid grid-cols-3 px-16 gap-16 sm:gap-4 ">
            <li className='flex flex-col text-center w-auto'><span>Type:</span><span className='text-sm text-gray-500'>{location?.type}</span></li>
            <li className="flex flex-col text-center w-auto"><span>Dimension:</span><span className='text-sm text-gray-500'>{location?.dimension}</span></li>
            <li className="flex flex-col text-center w-auto"><span>Population: </span><span className='text-sm text-gray-500'>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo