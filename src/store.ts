import { create } from 'zustand'
import { db } from './db'
import type { Settings } from './types'

interface AppState {
  settings: Settings
  setManualAverage: (v: number) => Promise<void>
  setAverageMode: (mode: Settings['averageMode']) => Promise<void>
  load: () => Promise<void>
}

const defaultSettings: Settings = {
  averageMode: 'manual',
  manualAveragePerDay: 40,
}

export const useAppStore = create<AppState>((set, get) => ({
  settings: defaultSettings,
  async load() {
    const s = await db.settings.toArray()
    if (s[0]) {
      set({ settings: s[0] })
    } else {
      await db.settings.add(defaultSettings)
      set({ settings: defaultSettings })
    }
  },
  async setManualAverage(v) {
    const s = { ...get().settings, manualAveragePerDay: v }
    set({ settings: s })
    const rec = await db.settings.toArray()
    if (rec[0]) await db.settings.update(rec[0] as any, s)
  },
  async setAverageMode(mode) {
    const s = { ...get().settings, averageMode: mode }
    set({ settings: s })
    const rec = await db.settings.toArray()
    if (rec[0]) await db.settings.update(rec[0] as any, s)
  },
}))

