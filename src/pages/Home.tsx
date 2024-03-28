import React , {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { HomeSection } from '../components/HomeSection'

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      navigate('/notes');
    }
  }, [])
  

  return (
    <>
        <HomeSection/>
    </>
  )
}

export default Home