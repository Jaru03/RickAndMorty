import { useRef } from "react"

const FormSearch = ({setLocationSelect}) => {
    
    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setLocationSelect(inputSearch.current.value.trim())
    }

  return (
    <div className='flex justify-center my-5'>
        <form onSubmit={handleSubmit} className='h-10 m-6 w-1/2 relative'>
            <input placeholder='Enter the dimension ID' className="h-full rounded-s-2xl text-center w-2/3" ref={inputSearch} type="text" />
            <button className="h-full bg-text-lime rounded-e-2xl w-1/3 absolute top-0 font-semibold text-white">Search</button>
        </form>
    </div>
  )
}

export default FormSearch