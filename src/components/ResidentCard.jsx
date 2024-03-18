import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import './styles/ResidentCard.css'

const ResidentCard = ({url}) => {

    const [ character, getCharacter ] = useFetch(url)

    useEffect(() => {
      getCharacter()
    }, [])
    

  return (
    <article className="w-full max-w-xs rounded-2xl overflow-hidden bg-card-rickandmorty text-white">
        <header className=" w-full aspect-auto relative">
            <img className="w-full" src={character?.image} alt="" />
            <div className="status absolute top-9 bg-card-rickandmorty w-28 py-1 rounded-r-lg flex items-center">
                <div className={`status rounded-xl w-4 h-4 mx-2 ${character?.status}`}>  </div>
                <div>{character?.status}</div>
            </div>
            <section className="ay">
                <h3 className="text-center text-xl py-3 font-semibold">{character?.name}</h3>
                <hr className="w-4/5 m-auto text-gray-500"/>
                <ul className="py-4">
                    <li><span className="py-3 px-4 text-gray-500 text-sm block font-medium">Specie</span><span className="py-3 px-7 font-medium text-s">{character?.species}</span></li>
                    <li><span className="py-3 px-4 text-gray-500 text-sm block font-medium">Origin</span><span className="py-3 px-7 font-medium text-s">{character?.origin.name}</span></li>
                    <li><span className="py-3 px-4 text-gray-500 text-sm block font-medium">Episodes where appear</span><span className="py-3 px-7 font-medium text-s">{character?.episode.length}</span></li>
                </ul>
            </section>
        </header>
    </article>
  )
}

export default ResidentCard