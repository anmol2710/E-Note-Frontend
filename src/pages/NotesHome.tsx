import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AuroraBackground } from '../components/ui/aurora-background'
import { BackgroundGradient } from '../components/ui/background-gradient'
import Navbar from '../components/Navbar'

const NotesHome = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      navigate('/login');
    }
  }, [navigate])


  const [Notes, setNotes] = useState([
    {
      "name": "Principles of Electrical Engineering (PEE)",
      "notes": "/notes/PEE",
      "Labnotes": "/Lab-notes/PEE"
    },
    {
      "name": "Mathematics-II",
      "notes": "/notes/Maths2"
    },
    {
      "name": "Electrical Measurements (EM)",
      "notes": "/notes/EM",
      "Labnotes": "/Lab-notes/EM"
    },
    {
      "name": "Introduction to Electromagnetic Theory (EMT)",
      "notes": "/notes/EMT"
    },
    {
      "name": "Electronics Devices and Circuits (EDC)",
      "notes": "/notes/EDC",
      "Labnotes": "/Lab-notes/EDC"
    },
    {
      "name": "Computer Programming (CP)",
      "notes": "/notes/CP",
      "Labnotes": "/Lab-notes/CP"
    }
  ]);

  return (
    <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
      <AuroraBackground className=' min-h-screen w-screen'>
        <Navbar />
        <div className=' mt-[170px] mb-[50px] flex flex-wrap items-center justify-around gap-8 text-white md:mt-100 lg:mt-30 '>
          {Notes?.map(note => (
            <div className=' flex items-center justify-center'>
              <BackgroundGradient className=" w-[300px] min-h-[200px] rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 md:min-w-[400px]">
                <div className=' min-h-[150px] flex flex-col justify-between'>
                  <p className="text-xl font-semibold text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {note.name}
                  </p>
                  <div className=' flex items-center justify-center gap-4 text-xl '>
                    <Link to={note.notes} className=" p-2 rounded-lg bg-black dark:bg-zinc-700">Notes</Link>
                    {note.Labnotes &&
                      <Link to={note.Labnotes} className="p-2 rounded-lg bg-black dark:bg-zinc-700">Lab Notes</Link>
                    }
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </AuroraBackground>
    </div>
  )
}

export default NotesHome