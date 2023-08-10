import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Contacts/>
      <Gallery/>
      <Plans/>
      <Trainers/>
      <NotFound/>
    </BrowserRouter>
  )
}

export default App