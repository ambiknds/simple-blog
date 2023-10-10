import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import About from './components/About'
import BlogDetails from './components/BlogDetails'
import { NotFound } from './components/NotFound'

export default function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Navbar /> */}
        <div className='content'>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="blogs/:id" element={<BlogDetails />} />
              <Route path="about" element={<About />} />
              <Route path="create" element={<Create />} />
              <Route path='*' element={<NotFound/>} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}
