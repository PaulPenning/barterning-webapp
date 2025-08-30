import './App.css'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
          <h1 className="text-lg font-semibold">BDO Bartering</h1>
          <nav className="text-sm flex gap-4">
            <Link to="/" className="hover:text-white">Dashboard</Link>
            <Link to="/inventory" className="hover:text-white">Inventory</Link>
            <Link to="/import" className="hover:text-white">Import</Link>
            <Link to="/routes" className="hover:text-white">Routes</Link>
            <Link to="/upgrades" className="hover:text-white">Upgrades</Link>
            <Link to="/settings" className="hover:text-white">Settings</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
