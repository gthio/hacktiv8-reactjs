import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Award from './pages/Award';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Interest from './pages/Interest';
import Skill from './pages/Skill';

import './index.css';

function App() {

  return (
    <>

    <Router>
      <Routes>

          <Route element={<Layout />}>
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/interest" element={<Interest />} />
              <Route path="/award" element={<Award />} />
          </Route>

      </Routes>
    </Router>



    </>
  )
}

export default App
