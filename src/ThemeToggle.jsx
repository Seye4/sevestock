import { useGlobalContext } from './context'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

const ThemeToggle = () => {
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext()

  return (
    <section className='toggleContainer'>
        <button className="dark-Toggle" onClick={toggleDarkTheme}>
            {isDarkTheme ?  ( <BsFillMoonFill className='toggle-Icon'  /> ) : ( <BsFillSunFill className='toggle-Icon'  /> ) }
            
        </button>
    </section>
  )
}

export default ThemeToggle