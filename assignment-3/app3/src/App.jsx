import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Page from './pages/Page';
import { profileContent } from './data/content';

import './index.css';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route element={<Layout />}>

            <Route
              path="/"
              element={<Page name="About" content={profileContent.about} />}
            />
            {Object.keys(profileContent).map((key) => (
              <Route
                key={key}
                path={`/${key}`}
                element={<Page name={key.charAt(0).toUpperCase() + key.slice(1)} content={profileContent[key]} />}
              />
            ))}
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
