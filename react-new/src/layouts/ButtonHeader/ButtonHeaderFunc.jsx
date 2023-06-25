import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { btnHeader } from '../../constants/btnHeader'

function ButtonHeaderFunc() {

const [isVisible, setIsVisible] = useState(false)

    const handleOpen = () => {
        setIsVisible(!isVisible)
    }

  return (
    <>
    <button onClick={handleOpen}>{!isVisible ? 'Show pages' : 'Hide pages'}</button>
      
      {isVisible && btnHeader.map(({ id, value, title }) => {
        return <Link key ={id} to={value}><Button text={title} /></Link>
      })}
    </>
  )
}

export default ButtonHeaderFunc