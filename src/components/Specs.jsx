import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'

const specs = [
  { label: 'Driver Size', labelTh: 'ขนาดไดรเวอร์', value: '50mm', type: 'text' },
  { label: 'Frequency Response', labelTh: 'ช่วงความถี่', value: '4Hz - 40kHz', type: 'text' },
  { label: 'Impedance', labelTh: 'อิมพีแดนซ์', value: '32Ω', type: 'text' },
  { label: 'Weight', labelTh: 'น้ำหนัก', value: '250g', type: 'text' },
  { label: 'Battery', labelTh: 'แบตเตอรี่', value: '60hrs', type: 'text' },
  { label: 'Charging', labelTh: 'ชาร์จเร็ว', value: 'USB-C', type: 'text' },
  { label: 'Bluetooth', labelTh: 'บลูทูธ', value: '5.4', type: 'text' },
  { label: 'Water Resistance', labelTh: 'กันน้ำ', value: 'IPX5', type: 'text' },
]

function StatCounter({ end, suffix, label, labelTh }) {
  const { count, ref } = useCountUp(end, 2000)

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
        {count}<span className="text-primary-light text-3xl">{suffix}</span>
      </div>
      <div className="text-white/40 text-sm">{label}</div>
      <div className="text-white/20 text-xs">{labelTh}</div>
    </div>
  )
}

export default function Specs() {
  const ref = useScrollReveal()

  return (
    <section id="specs" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 reveal">
          <StatCounter end={60} suffix="h" label="Battery Life" labelTh="แบตเตอรี่" />
          <StatCounter end={45} suffix="dB" label="Noise Cancelling" labelTh="ลดเสียงรบกวน" />
          <StatCounter end={50} suffix="mm" label="Driver Size" labelTh="ขนาดไดรเวอร์" />
          <StatCounter end={10} suffix="K+" label="Happy Users" labelTh="ผู้ใช้ทั่วโลก" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary-light text-xs font-semibold tracking-[0.2em] uppercase mb-4 glass-card rounded-full px-4 py-1.5">
            Specifications — สเปค
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ข้อมูล<span className="gradient-text">ทางเทคนิค</span>
          </h2>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 reveal">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`spec-item glass-card rounded-2xl p-5 text-center transition-all duration-300`}
            >
              <div className="text-xs text-white/30 uppercase tracking-wider mb-2">
                {spec.label}
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                {spec.value}
              </div>
              <div className="text-xs text-white/40">
                {spec.labelTh}
              </div>
            </div>
          ))}
        </div>

        {/* Supported codecs */}
        <div className="mt-16 text-center reveal">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-6">Supported Codecs</p>
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {['LDAC', 'aptX HD', 'aptX', 'AAC', 'SBC'].map((codec) => (
              <div key={codec} className="glass-card rounded-xl px-5 py-3">
                <span className="text-white/60 font-display font-semibold text-sm">{codec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
