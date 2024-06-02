import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

    const {setSearchTerm} = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = e.target.elements.search.value

        if(!searchValue) return

        setSearchTerm({})
    }

  return (
    <section>
        <h1 className='title'>SeveStock</h1>
        <form className='search-form' onSubmit={handleSubmit} >
            <input type="text" className='form-input search-input' name='search' placeholder='goose' />
            <button type='submit' className='btn'>search</button>
        </form>
    </section>
  )
}

export default SearchForm