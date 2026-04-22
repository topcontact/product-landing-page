import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'สมชาย ว.',
    nameEn: 'Somchai W.',
    role: 'Music Producer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'เสียงใสมาก แยกแยะ instrument แต่ละชิ้นได้ชัดเจน ใช้ทำ mix ได้เลย ANC ก็ดีเยี่ยม ปิดเสียงรบกวนได้หมดจด',
    highlight: 'ใช้ทำ mix ได้เลย',
  },
  {
    name: 'วิภา ส.',
    nameEn: 'Wipada S.',
    role: 'Content Creator',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'ใส่สบายมาก ไม่กดหูแม้ใส่ทั้งวัน แบตก็อึดมาก ชาร์จครั้งเดียวใช้ได้ทั้งสัปดาห์เลย คุ้มค่ามากๆ',
    highlight: 'คุ้มค่ามากๆ',
  },
  {
    name: 'ธนภัทร ก.',
    nameEn: 'Thanapat K.',
    role: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    text: 'ใช้ทำงานทุกวัน Multi-point connection ดีมาก สลับ laptop กับมือถือได้ลื่นๆ ปุ่มควบคุมก็ใช้ง่าย',
    highlight: 'สลับ laptop กับมือถือได้ลื่นๆ',
  },
  {
    name: 'จิราภรณ์ ร.',
    nameEn: 'Jiraporn R.',
    role: 'Fitness Trainer',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'ใส่วิ่งไม่หลุดเลย กันเหงื่อได้ดี เสียง bass แรงเหมาะกับเพลงออกกำลังกาย แนะนำสำหรับคนรักสุขภาพ',
    highlight: 'แนะนำสำหรับคนรักสุขภาพ',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section id="reviews" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-surface-light/50" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary-light text-xs font-semibold tracking-[0.2em] uppercase mb-4 glass-card rounded-full px-4 py-1.5">
            Reviews — รีวิวจากผู้ใช้
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ผู้ใช้<span className="gradient-text">พูดถึงเราอย่างไร</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            กว่า 10,000 คนเลือก LUXE Audio แล้ว
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 md:p-8 hover:border-primary/20 transition-all duration-400 reveal-scale delay-${(index + 1) * 100}`}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-white/30 text-xs">{review.nameEn} · {review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos */}
        <div className="mt-16 text-center reveal">
          <p className="text-white/20 text-sm uppercase tracking-widest mb-8">Featured On</p>
          <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
            {['TechCrunch', 'The Verge', 'CNET', 'Wired', 'Bangkok Post'].map((brand) => (
              <span key={brand} className="text-white/15 font-display font-bold text-lg sm:text-xl tracking-wider">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
