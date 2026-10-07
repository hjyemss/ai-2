import Link from 'next/link'
import Mermaid from '@/components/Mermaid'

const chart = `
mindmap
  root((高中物理))
    力学
      运动学
        质点与参考系
        位移速度加速度
        匀变速直线运动
        自由落体运动
      相互作用
        重力弹力摩擦力
        力的合成与分解
      牛顿运动定律
        牛顿第一定律
        牛顿第二定律
        牛顿第三定律
        超重与失重
      曲线运动
        抛体运动
        圆周运动
        万有引力与航天
      能量与动量
        功和功率
        动能定理
        机械能守恒
        动量守恒
    电磁学
      静电场
        库仑定律
        电场强度
        电势能电势
        等势面
      电路
        欧姆定律
        串联与并联
        闭合电路欧姆定律
        电功与电功率
      磁场
        磁感应强度
        安培力
        洛伦兹力
      电磁感应
        磁通量
        法拉第定律
        楞次定律
      交变电流
        正弦式交变电流
        变压器
        远距离输电
    振动与波
      机械振动
        简谐运动
        单摆
        受迫振动与共振
      机械波
        波长频率波速
        干涉与衍射
      光
        折射与全反射
        光的干涉与衍射
        偏振
    热学
      分子动理论
        分子大小与数量级
        分子热运动
        分子间作用力
      气体固体液体
        气体实验定律
        理想气体状态方程
      热力学定律
        热力学第一定律
        热力学第二定律
    近代物理
      原子结构
        光电效应
        康普顿效应
        玻尔模型
        物质波
      原子核
        天然放射性
        核反应方程
        半衰期
        质能方程
`

export default function PhysicsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <nav className="mb-10 flex gap-6 text-sm border-b pb-3">
        <Link href="/" className="text-gray-500 hover:text-blue-600">项目调研</Link>
        <Link href="/physics" className="font-bold text-blue-600">物理知识图谱</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-2">高中物理知识图谱</h1>
      <p className="text-gray-500 mb-8">
        基于人教版高中物理全套教材整理，按「模块 → 章节 → 知识点」三层结构组织。
      </p>

      <div className="border rounded-lg p-4 bg-white shadow-sm">
        <Mermaid chart={chart} />
      </div>

      <section className="mt-10 text-sm text-gray-600 leading-7">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">说明</h2>
        <p>
          图谱分为五大模块：力学、电磁学、振动与波、热学、近代物理。
          力学是基础，电磁学是核心，振动与波连接力学与光学，热学和近代物理相对独立。
          后续可以在此基础上标注知识点之间的前置依赖关系。
        </p>
      </section>
    </main>
  )
}