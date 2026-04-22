import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-xs font-medium tracking-wide">
                NEW RELEASE — มาใหม่ 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Experience
              <br />
              <span className="gradient-text">Pure Sound</span>
              <br />
              Like Never Before
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-xl mb-8 leading-relaxed font-light">
              หูฟังไร้สายคุณภาพพรีเมียมที่ให้คุณสัมผัสประสบการณ์เสียงในระดับใหม่
              ด้วยเทคโนโลยี Active Noise Cancelling ล้ำสมัย
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <a
                href="#pricing"
                className="btn-glow bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-base font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
              >
                <span>สั่งซื้อเลย</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#showcase"
                className="glass-card text-white px-8 py-4 text-base font-medium rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>ดูเพิ่มเติม</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    'https://randomuser.me/api/portraits/women/44.jpg',
                    'https://randomuser.me/api/portraits/men/32.jpg',
                    'https://randomuser.me/api/portraits/women/68.jpg',
                    'https://randomuser.me/api/portraits/men/75.jpg',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-surface object-cover"
                    />
                  ))}
                </div>
                <span className="text-white/50 text-sm">10K+ ผู้ใช้</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white/50 text-sm ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className={`relative flex justify-center transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            {/* Glow ring behind product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-[60px]" />

            {/* Product image container */}
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
                alt="LUXE Audio Premium Headphones"
                className="relative z-10 w-72 sm:w-80 md:w-96 drop-shadow-2xl"
              />

              {/* Floating specs badges */}
              <div className="absolute -left-4 top-1/4 glass-card-strong rounded-2xl px-4 py-3 animate-float-slow z-20">
                <div className="text-xs text-white/50 mb-1">Battery Life</div>
                <div className="text-lg font-bold text-white font-display">60 <span className="text-sm text-primary-light">hrs</span></div>
              </div>

              <div className="absolute -right-4 top-1/2 glass-card-strong rounded-2xl px-4 py-3 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="text-xs text-white/50 mb-1">Driver Size</div>
                <div className="text-lg font-bold text-white font-display">50 <span className="text-sm text-primary-light">mm</span></div>
              </div>

              <div className="absolute left-1/4 -bottom-4 glass-card-strong rounded-2xl px-4 py-3 animate-float-slow z-20" style={{ animationDelay: '2s' }}>
                <div className="text-xs text-white/50 mb-1">ANC</div>
                <div className="text-lg font-bold text-white font-display">-45 <span className="text-sm text-primary-light">dB</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
