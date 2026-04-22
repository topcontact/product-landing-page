import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const plans = [
  {
    name: 'LUXE Studio',
    subtitle: 'สำหรับมืออาชีพ',
    price: '฿6,490',
    originalPrice: '฿8,990',
    discount: 'ลด 28%',
    popular: false,
    features: [
      'Active Noise Cancelling -40dB',
      'แบตเตอรี่ 45 ชั่วโมง',
      'Bluetooth 5.3',
      'Hi-Res Audio (LDAC)',
      'Studio Mode',
      'USB-C Fast Charging',
      'รับประกัน 1 ปี',
    ],
    missing: [
      'Adaptive EQ',
      'Multi-Point Connection',
    ],
  },
  {
    name: 'LUXE Pro Max',
    subtitle: 'รุ่นท็อป — ขายดีที่สุด',
    price: '฿8,990',
    originalPrice: '฿12,990',
    discount: 'ลด 31%',
    popular: true,
    features: [
      'Active Noise Cancelling -45dB',
      'แบตเตอรี่ 60 ชั่วโมง',
      'Bluetooth 5.4',
      'Hi-Res Audio (LDAC + aptX HD)',
      'Adaptive EQ',
      'Multi-Point Connection',
      'USB-C Fast Charging',
      'Premium Carrying Case',
      'รับประกัน 2 ปี',
    ],
    missing: [],
  },
  {
    name: 'LUXE Sport',
    subtitle: 'สำหรับออกกำลังกาย',
    price: '฿4,290',
    originalPrice: '฿5,990',
    discount: 'ลด 28%',
    popular: false,
    features: [
      'IPX5 Water Resistant',
      'แบตเตอรี่ 35 ชั่วโมง',
      'Bluetooth 5.3',
      'Bass Boost Mode',
      'Secure Sport Fit',
      'USB-C Charging',
      'รับประกัน 1 ปี',
    ],
    missing: [
      'Active Noise Cancelling',
      'Hi-Res Audio',
    ],
  },
]

export default function Pricing() {
  const ref = useScrollReveal()
  const [order, setOrder] = useState(null)

  return (
    <section id="pricing" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary-light text-xs font-semibold tracking-[0.2em] uppercase mb-4 glass-card rounded-full px-4 py-1.5">
            Pricing — ราคา
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            เลือกแพ็กเกจ<span className="gradient-text">ที่เหมาะกับคุณ</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            จัดส่งฟรีทั่วประเทศไทย · คืนสินค้าได้ภายใน 30 วัน
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card rounded-3xl p-7 md:p-8 ${
                plan.popular
                  ? 'pricing-popular glow-primary relative'
                  : 'glass-card'
              } reveal-scale delay-${(index + 1) * 200}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-primary/25">
                  ⭐ ยอดนิยม
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-white/40 text-sm">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/30 line-through text-sm">
                    {plan.originalPrice}
                  </span>
                </div>
                <span className="inline-block mt-2 text-xs font-semibold text-green-400 bg-green-400/10 rounded-full px-3 py-1">
                  {plan.discount}
                </span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setOrder({ name: plan.name, price: plan.price })}
                className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 mb-8 ${
                  plan.popular
                    ? 'btn-glow bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02]'
                    : 'glass-card text-white hover:bg-white/10'
                }`}
              >
                สั่งซื้อเลย
              </button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-light shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/60 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-40">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-white/40 text-sm line-through">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center reveal">
          <div className="glass-card-strong inline-flex items-center gap-3 rounded-2xl px-6 py-4">
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-white/60 text-sm">
              รับประกันคุณภาพ · คืนสินค้าได้ภายใน 30 วัน · จัดส่งฟรีทั่วไทย
            </span>
          </div>
        </div>
      </div>

      {/* Order Success Modal */}
      {order && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOrder(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative glass-card-strong rounded-3xl p-8 max-w-md w-full text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))',
              border: '1px solid rgba(99,102,241,0.4)',
              animation: 'modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Checkmark */}
            <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-2">
              สั่งซื้อสำเร็จ!
            </h3>
            <p className="text-white/60 text-sm mb-4">
              ขอบคุณที่เลือก LUXE Audio
            </p>

            <div className="glass-card rounded-2xl p-4 mb-6">
              <p className="text-white font-display font-bold text-lg">{order.name}</p>
              <p className="text-primary-light font-display font-extrabold text-2xl mt-1">{order.price}</p>
            </div>

            <button
              onClick={() => setOrder(null)}
              className="btn-glow bg-gradient-to-r from-primary to-accent text-white px-8 py-3 font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
