import { Outlet } from 'react-router';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
