import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 项目调研 · 高中物理知识图谱',
  description: '课程作业网站',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}