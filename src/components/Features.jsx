import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Active Noise Cancelling',
    titleTh: 'ลดเสียงรบกวนอัตโนมัติ',
    description: 'เทคโนโลยี ANC ล้ำสมัย ลดเสียงรบกวนได้สูงสุด -45dB ให้คุณจดจ่อกับสิ่งสำคัญ',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18.75h7.5a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75V18c0 .414.336.75.75.75zM3.75 10.5h7.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75V9.75c0 .414.336.75.75.75z" />
      </svg>
    ),
    title: '60-Hour Battery',
    titleTh: 'แบตเตอรี่ 60 ชั่วโมง',
    description: 'ใช้งานต่อเนื่องยาวนานถึง 60 ชั่วโมง ชาร์จเพียง 10 นาทีใช้งานได้ 5 ชั่วโมง',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: 'Hi-Res Audio',
    titleTh: 'เสียงความละเอียดสูง',
    description: 'รองรับ LDAC และ aptX HD ให้เสียงที่ชัดเจนทุกระดับความถี่ ไร้การสูญเสีย',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: 'Bluetooth 5.4',
    titleTh: 'บลูทูธ 5.4',
    description: 'การเชื่อมต่อที่เสถียรและรวดเร็ว รองรับ Multi-Point Connection พร้อมกัน 2 เครื่อง',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Adaptive EQ',
    titleTh: 'ปรับเสียงอัตโนมัติ',
    description: 'ระบบปรับสมดุลเสียงอัตโนมัติให้เหมาะกับรูปหูของคุณ พร้อม Transparency Mode',
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'IPX5 Water Resistant',
    titleTh: 'กันน้ำ IPX5',
    description: 'ทนต่อเหงื่อและฝนเล็กน้อย เหมาะสำหรับการออกกำลังกายและใช้งานกลางแจ้ง',
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function Features() {
  const ref = useScrollReveal()

  return (
    <section id="features" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary-light text-xs font-semibold tracking-[0.2em] uppercase mb-4 glass-card rounded-full px-4 py-1.5">
            Features — คุณสมบัติเด่น
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ทำไมต้อง <span className="gradient-text">LUXE Audio?</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            รวมทุกสิ่งที่คุณต้องการในหูฟังไร้สายระดับพรีเมียม ในราคาที่เข้าถึงได้
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card glass-card rounded-2xl p-6 md:p-8 reveal-scale delay-${(index % 3) * 200 + 100}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-5`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-primary-light text-sm font-medium mb-3">
                {feature.titleTh}
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
