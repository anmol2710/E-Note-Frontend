import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from './pages/Home';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import NotesHome from './pages/NotesHome';
import LabNotes from './pages/LabNotes';
import Notes from "./pages/Notes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/notes' element={<NotesHome/>} />
        <Route path='/notes/:pageId' element={<Notes/>}/>
        <Route path='/Lab-notes/:pageId' element={<LabNotes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
