'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'default' })
    const id = 'm-' + Math.random().toString(36).slice(2)
    if (ref.current) {
      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current) ref.current.innerHTML = svg
        })
        .catch((err) => {
          if (ref.current) ref.current.innerText = '图谱渲染失败：' + err.message
        })
    }
  }, [chart])

  return <div ref={ref} className="overflow-auto" />
}
