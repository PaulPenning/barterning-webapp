import { useEffect } from 'react'
import { useAppStore } from '../store'

export default function SettingsPage() {
  const { settings, setManualAverage, setAverageMode, load } = useAppStore()

  useEffect(() => {
    void load()
  }, [load])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Settings</h2>

      <div className="rounded-lg border border-slate-800 p-4 bg-slate-900/40 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Average mode</label>
          <div className="flex items-center gap-4 text-sm">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="avg-mode"
                value="manual"
                checked={settings.averageMode === 'manual'}
                onChange={() => setAverageMode('manual')}
              />
              Manual input
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="avg-mode"
                value="auto"
                checked={settings.averageMode === 'auto'}
                onChange={() => setAverageMode('auto')}
              />
              Auto (calculate from recent days)
            </label>
          </div>
        </div>

        {settings.averageMode === 'manual' && (
          <div>
            <label className="block text-sm font-medium mb-1">Manual average barters/day</label>
            <input
              type="number"
              className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm"
              min={0}
              value={settings.manualAveragePerDay ?? 0}
              onChange={(e) => setManualAverage(Number(e.target.value))}
            />
          </div>
        )}

        {settings.averageMode === 'auto' && (
          <p className="text-sm text-slate-300">
            Auto mode will estimate average based on your logged barters. This will activate once logging is implemented.
          </p>
        )}
      </div>
    </div>
  )
}

