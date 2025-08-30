import { useState } from 'react'

export default function ImportPage() {
  const [text, setText] = useState('')

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Import today&apos;s barters</h2>
      <div className="rounded-lg border border-slate-800 p-4 bg-slate-900/40 space-y-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste barters here (one per line: Island | Give Qty x Item -> Get Qty x Item)"
          className="w-full h-48 bg-slate-950 border border-slate-700 rounded p-3 text-sm"
        />
        <div className="text-right">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm">
            Preview import
          </button>
        </div>
      </div>
    </div>
  )
}

