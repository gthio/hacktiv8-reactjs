import { Link } from 'react-router-dom';

import './Navigation.css';

export default function Navigation() {
  return (
    <div className='navigation-container'>
      <div className='navigation-profile'>
        <div className='navigation-profile-image'>
          <img src='/cat.svg' alt='Profile' />
        </div>
        <div className='navigation-profile-name'>
          <span style={{fontweight:'bold', color:'yellow'}}>cutesy miso!</span>
        </div>
      </div>
      <div className='navigation-nav'>
        <nav>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/experience">Experience</Link>
          </div>
          <div>
            <Link to="/education">Education</Link>
          </div>
          <div>
            <Link to="/skill">Skill</Link>
          </div>
          <div>
            <Link to="/interest">Interest</Link>
          </div>
          <div>
            <Link to="/award">Award</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

