import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Event from './components/Event'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event/:eventId' element={<Event />} />
      </Routes>
    </Router>
  )
}

export default App
