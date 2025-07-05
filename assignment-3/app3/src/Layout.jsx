import { Outlet } from 'react-router';
import Navigation from './components/Navigation';

export default function Layout() {

  return (
    <div className='layout'>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );

}

