export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-800 p-4 bg-slate-900/40">
          <div className="font-medium">Today&apos;s prioritized barters</div>
          <div className="text-sm text-slate-300">Import today&apos;s list to populate.</div>
        </div>
        <div className="rounded-lg border border-slate-800 p-4 bg-slate-900/40">
          <div className="font-medium">Upgrade progress</div>
          <div className="text-sm text-slate-300">Choose a target in Upgrades to see progress.</div>
        </div>
      </div>
    </div>
  )
}

