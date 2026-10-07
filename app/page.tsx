import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <nav className="mb-10 flex gap-6 text-sm border-b pb-3">
        <Link href="/" className="font-bold text-blue-600">项目调研</Link>
        <Link href="/physics" className="text-gray-500 hover:text-blue-600">物理知识图谱</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-2">AI 项目方向调研</h1>
      <p className="text-gray-500 mb-10">方向：AI + 教育 · 高中物理知识图谱与个性化学习</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">一、方向定位</h2>
        <p className="leading-7">
          本项目属于 <strong>AI 应用方向</strong>。核心想法是：把高中物理教材的结构化知识整理成知识图谱，
          再基于图谱为学生提供个性化学习路径推荐、薄弱知识点定位和错题归因。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">二、领域现状</h2>
        <p className="leading-7 mb-4">
          知识图谱 + 教育是目前 AI 应用的热门方向。国外以可汗学院、Duolingo 为代表，
          国内以松鼠 AI、国家中小学智慧教育平台为代表，都在尝试用结构化知识帮助学生个性化学习。
          但针对<strong>高中物理</strong>这一具体学科的细粒度知识图谱仍然较少。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">三、已有案例</h2>
        <ul className="space-y-4 leading-7">
          <li>
            <strong>1. Khanmigo（可汗学院）</strong><br />
            基于 GPT-4 的 AI 助教，为学生提供个性化辅导，为教师提供备课支持。<br />
            <a className="text-blue-600 underline" href="https://www.khanacademy.org/khan-labs" target="_blank">https://www.khanacademy.org/khan-labs</a>
          </li>
          <li>
            <strong>2. 松鼠 AI（Squirrel AI）</strong><br />
            国内智适应教育公司，用知识图谱定位学生薄弱知识点，推荐个性化学习路径。<br />
            <a className="text-blue-600 underline" href="https://squirrelai.com" target="_blank">https://squirrelai.com</a>
          </li>
          <li>
            <strong>3. 国家中小学智慧教育平台</strong><br />
            教育部官方平台，提供全套电子教材，是本次物理知识图谱的数据来源。<br />
            <a className="text-blue-600 underline" href="https://basic.smartedu.cn" target="_blank">https://basic.smartedu.cn</a>
          </li>
          <li>
            <strong>4. GitHub 开源知识图谱项目</strong><br />
            在 GitHub 搜索 <code>K12 knowledge graph</code> 可找到多个从教材自动抽取知识图谱的开源项目。<br />
            <a className="text-blue-600 underline" href="https://github.com/search?q=K12+knowledge+graph" target="_blank">https://github.com/search?q=K12+knowledge+graph</a>
          </li>
          <li>
            <strong>5. Duolingo</strong><br />
            用 AI 和知识图谱追踪学习进度，动态调整练习内容。<br />
            <a className="text-blue-600 underline" href="https://www.duolingo.com" target="_blank">https://www.duolingo.com</a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">四、我的切入角度</h2>
        <ul className="list-disc pl-6 space-y-2 leading-7">
          <li>现有项目多集中在英语、数学，物理学科的知识图谱较少。</li>
          <li>可以基于人教版高中物理全套教材，构建细粒度知识图谱。</li>
          <li>进一步可结合错题数据，做知识点归因和个性化推荐。</li>
          <li>技术路线：Next.js + Mermaid 可视化 + 后续接入 AI 推荐。</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-400 border-t pt-4">
        课程作业 · 2026 年 10 月
      </footer>
    </main>
  )
}