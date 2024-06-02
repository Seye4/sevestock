import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

    // import setsearch function via globalcontext
    const {setSearchTerm} = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        // get search value from font
        const searchValue = e.target.elements.search.value

        if(!searchValue) return

        //process search value via setsearchterm function
        setSearchTerm(searchValue)
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