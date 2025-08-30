import Dexie, { type Table } from 'dexie'
import type { InventoryEntry, Item, BarterOffer, UpgradeGoal, Settings } from './types'

export class BdoBarterDB extends Dexie {
  items!: Table<Item, string>
  inventory!: Table<InventoryEntry, string>
  offers!: Table<BarterOffer, number>
  goals!: Table<UpgradeGoal, string>
  settings!: Table<Settings, number>

  constructor() {
    super('bdo-barter-db')
    this.version(1).stores({
      items: 'id,name',
      inventory: 'itemId',
      offers: '++id,date,island',
      goals: 'id,name',
      settings: '++id',
    })
  }
}

export const db = new BdoBarterDB()

