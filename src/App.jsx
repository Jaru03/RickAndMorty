import { useEffect, useState} from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'
import './components/styles/App.css'

function App() {
  const randomLocation = getRandomNumber(126)
  const [locationSelect, setLocationSelect] = useState(randomLocation)
  const url = `https://rickandmortyapi.com/api/location/${locationSelect || getRandomNumber(126)}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [locationSelect])
  
  return (
    <div className='bg-pricipal'>

      <div className='fondoRick'>
      </div>
      
      <FormSearch setLocationSelect={setLocationSelect}/>
      {
        hasError
        ?<h2 className='text-white flex justify-center p-10'>Hey! you must provide a id 1 to 126</h2>
        : ( 
          <>
            <LocationInfo location={location}/>
            <div className='flex flex-wrap justify-center gap-6 p-6'>
              {
                location?.residents.map(url =>
                  <ResidentCard 
                  key={url}
                  url={url}/>
                  )
              }
            </div>
          </>
        )
      }
      
    </div>
  )
}

export default App
