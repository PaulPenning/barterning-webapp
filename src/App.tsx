import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
          <h1 className="text-lg font-semibold">BDO Bartering</h1>
          <nav className="text-sm flex gap-4">
            <a href="#" className="hover:text-white">Dashboard</a>
            <a href="#" className="hover:text-white">Inventory</a>
            <a href="#" className="hover:text-white">Import</a>
            <a href="#" className="hover:text-white">Routes</a>
            <a href="#" className="hover:text-white">Upgrades</a>
            <a href="#" className="hover:text-white">Settings</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-lg border border-slate-800 p-6 bg-slate-900/40">
          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p className="text-slate-300 text-sm">
            Start by importing today&apos;s barters or adding your inventory.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
