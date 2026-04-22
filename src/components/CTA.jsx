import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTA() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="gradient-border glass-card-strong rounded-3xl p-8 sm:p-12 md:p-16 text-center reveal-scale">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h6m-5 0V6a2 2 0 114 0v2m-5 0H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1m-4 0v2m0 0h2" />
            </svg>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            พร้อมสัมผัส<br />
            <span className="gradient-text">ประสบการณ์เสียงใหม่?</span>
          </h2>

          <p className="text-white/40 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            สั่งซื้อวันนี้ รับส่วนลดสูงสุด 31% + จัดส่งฟรีทั่วไทย
            พร้อมรับประกันคุณภาพถึง 2 ปี
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#pricing"
              className="btn-glow bg-gradient-to-r from-primary to-accent text-white px-10 py-4 text-base font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>สั่งซื้อเลย</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:support@luxe-audio.com"
              className="glass-card text-white/70 hover:text-white px-10 py-4 text-base font-medium rounded-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              สอบถามเพิ่มเติม
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 flex-wrap text-white/30 text-xs">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              จัดส่งฟรี
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              คืนได้ 30 วัน
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              รับประกัน 2 ปี
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ชำระเงินปลอดภัย
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
