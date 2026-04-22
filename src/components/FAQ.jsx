import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    question: 'LUXE Audio รองรับอุปกรณ์อะไรบ้าง?',
    answer: 'รองรับทุกอุปกรณ์ที่มี Bluetooth — iPhone, iPad, Android, Mac, Windows PC, Laptop, แท็บเล็ต และ Smart TV รุ่นใหม่ๆ ด้วย Bluetooth 5.4 ทำให้การเชื่อมต่อเสถียรและรวดเร็วมาก',
  },
  {
    question: 'แบตเตอรี่อึดแค่ไหน? ชาร์จนานไหม?',
    answer: 'LUXE Pro Max ใช้งานต่อเนื่องได้ถึง 60 ชั่วโมง (ANC เปิด) และถึง 80 ชั่วโมง (ANC ปิด) ชาร์จเร็วด้วย USB-C — เพียง 10 นาที ใช้งานได้ 5 ชั่วโมง ชาร์จเต็มใช้เวลาประมาณ 1.5 ชั่วโมง',
  },
  {
    question: 'Active Noise Cancelling ดีแค่ไหน?',
    answer: 'LUXE Pro Max มี ANC ลดเสียงรบกวนได้สูงสุด -45dB ซึ่งจัดว่าเป็นระดับพรีเมียม สามารถใช้ในเครื่องบิน รถไฟ หรือที่ทำงานได้อย่างสบาย พร้อม Transparency Mode ให้ยินเสียงรอบข้างเมื่อต้องการ',
  },
  {
    question: 'มีบริการจัดส่งอย่างไร?',
    answer: 'จัดส่งฟรีทั่วประเทศไทย สั่งวันนี้ได้ภายใน 2-3 วันทำการ (กรุงเทพและปริมณฑล 1-2 วัน) จัดส่งด่วนพิเศษภายในวันเดียวกันสำหรับกรุงเทพ (สั่งก่อน 14:00 น.) มีเลขพัสดุติดตามได้ทุกออเดอร์',
  },
  {
    question: 'นโยบายคืนสินค้าเป็นอย่างไร?',
    answer: 'รับคืนสินค้าภายใน 30 วันหากไม่พอใจ ไม่ต้องให้เหตุผล สินค้าต้องอยู่ในสภาพสมบูรณ์ คืนเงินเต็มจำนวนภายใน 5-7 วันทำการ หากมีปัญหาจากการผลิต รับประกัน 2 ปี (Pro Max) / 1 ปี (รุ่นอื่น)',
  },
  {
    question: 'ใส่สบายไหม? น้ำหนักเท่าไหร่?',
    answer: 'น้ำหนักเพียง 250g ซึ่งเบากว่าหูฟังรุ่นอื่นๆ ในระดับเดียวกัน หุ้นด้วย Memory Foam คุณภาพสูง ห่อหุ้มด้วยโปรตีนเลียนแบบหนังแท้ ใส่ต่อเนื่องหลายชั่วโมงไม่ปวดหู มีขนาดปรับได้ 3 ระดับ',
  },
]

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/30' : ''}`}>
      <button
        onClick={toggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      >
        <span className="text-white font-medium text-sm sm:text-base pr-4">{faq.question}</span>
        <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary/20 rotate-45' : 'group-hover:bg-white/10'}`}>
          <svg className="w-4 h-4 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div className="px-6 pb-5">
          <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-surface-light/50" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-primary-light text-xs font-semibold tracking-[0.2em] uppercase mb-4 glass-card rounded-full px-4 py-1.5">
            FAQ — คำถามที่พบบ่อย
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            มี<span className="gradient-text">คำถาม?</span>
          </h2>
          <p className="text-white/40 text-lg">
            ตอบทุกคำถามที่คุณอยากรู้
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-white/30 text-sm mb-4">ยังมีคำถามเพิ่มเติม?</p>
          <a
            href="mailto:support@luxe-audio.com"
            className="inline-flex items-center gap-2 text-primary-light hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            ติดต่อเรา — support@luxe-audio.com
          </a>
        </div>
      </div>
    </section>
  )
}
