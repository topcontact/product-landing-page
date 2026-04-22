import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    name: 'LUXE Pro Max',
    nameTh: 'รุ่นท็อปสุด',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    price: '฿8,990',
    originalPrice: '฿12,990',
    colors: ['#1a1a2e', '#f5f5f0', '#8B4513'],
    badge: 'ขายดี',
    features: ['ANC -45dB', '60hr Battery', 'Hi-Res Audio'],
  },
  {
    name: 'LUXE Studio',
    nameTh: 'รุ่นมืออาชีพ',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80',
    price: '฿6,490',
    originalPrice: '฿8,990',
    colors: ['#2d2d2d', '#c0392b', '#2980b9'],
    badge: 'มาใหม่',
    features: ['ANC -40dB', '45hr Battery', 'Studio Mode'],
  },
  {
    name: 'LUXE Sport',
    nameTh: 'รุ่นออกกำลังกาย',
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&q=80',
    price: '฿4,290',
    originalPrice: '฿5,990',
    colors: ['#1a1a2e', '#16a085', '#e67e22'],
    badge: 'คุ้มค่า',
    features: ['IPX5', '35hr Battery', 'Secure Fit'],
  },
]

export default function ProductShowcase() {
  const ref = useScrollReveal()

  return (
    <section id="showcase" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-surface-light/50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary-light text-xs font-semibold tracking-[0.2em] uppercase mb-4 glass-card rounded-full px-4 py-1.5">
            Products — สินค้า
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            เลือกรุ่นที่<span className="gradient-text">ใช่สำหรับคุณ</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            ทุกรุ่นมาพร้อมคุณภาพเสียงระดับพรีเมียม แตกต่างกันที่ฟีเจอร์เฉพาะทาง
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 reveal-scale delay-${(index + 1) * 200}`}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-surface-lighter">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.badge}
                </div>
                {/* Quick actions overlay */}
                <div className="absolute inset-0 bg-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="#pricing"
                    className="bg-white text-surface px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300 transform scale-90 group-hover:scale-100"
                  >
                    ดูรายละเอียด
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="text-white/40 text-sm">{product.nameTh}</p>
                  </div>
                </div>

                {/* Color options */}
                <div className="flex items-center gap-2 mb-4">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white/10 cursor-pointer hover:border-white/40 transition-colors"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((feat, i) => (
                    <span
                      key={i}
                      className="text-xs text-white/50 bg-white/5 rounded-lg px-3 py-1"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white font-display">
                      {product.price}
                    </span>
                    <span className="text-sm text-white/30 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
