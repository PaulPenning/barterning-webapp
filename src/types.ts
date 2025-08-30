export type ItemId = string

export type AverageMode = 'manual' | 'auto'

export interface Item {
  id: ItemId
  name: string
  tier?: 'base' | 'green' | 'blue' | 'yellow'
  tags?: string[]
}

export interface InventoryEntry {
  itemId: ItemId
  qtyOwned: number
  qtyTradedToday: number
}

export interface BarterIO {
  itemId: ItemId
  qty: number
}

export interface BarterOffer {
  id?: number
  island: string
  date: string // ISO date for daily set
  give: BarterIO[]
  receive: BarterIO[]
  profitScore?: number
}

export interface DailyBarterSet {
  date: string
  offers: BarterOffer[]
  source: 'manual' | 'paste'
}

export interface Requirement {
  itemId: ItemId
  qty: number
}

export interface UpgradeGoal {
  id: string
  name: string
  requirements: Requirement[]
}

export interface Settings {
  averageMode: AverageMode
  manualAveragePerDay?: number
}

