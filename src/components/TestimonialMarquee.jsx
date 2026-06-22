import './Testimonials.css'

const QUOTES = [
  {
    text: "My SIPs were scattered across three apps before this. Now I have one person who actually explains why a fund makes sense for my goal, not just what to buy.",
    initials: "RK",
    name: "Rajesh K.",
    role: "SIP investor since 2021"
  },
  {
    text: "What I value most is the honesty about fees and risk. Nothing was oversold to me, and my portfolio review actually happens every quarter like promised.",
    initials: "AS",
    name: "Anjali S.",
    role: "Goal-based investor"
  },
  {
    text: "I started with ₹2,000 a month not knowing much about mutual funds. Three years later I understand my own portfolio — that's the real value for me.",
    initials: "PM",
    name: "Prakash M.",
    role: "First-time investor"
  },
  {
    text: "The quarterly portfolio review actually happens — and it's the first time anyone has explained XIRR to me in a way that made sense.",
    initials: "SN",
    name: "Sanjay N.",
    role: "Working professional"
  }
]

export default function TestimonialMarquee() {
  return (
    <section className="testimonial-section section">
      <div className="container">
        <div className="section-head reveal-head">
          <div className="eyebrow">What People Say</div>
          <h2>Consistent advice, through multiple market cycles.</h2>
        </div>
      </div>

      <div className="testi-marquee reveal-fade">
        <div className="testi-track">
          {/* Double up for infinite scroll loop */}
          {[...QUOTES, ...QUOTES].map((q, i) => (
            <div key={i} className="testi-card">
              <p>"{q.text}"</p>
              <div className="testi-person">
                <div className="testi-avatar">{q.initials}</div>
                <div>
                  <div className="testi-name">{q.name}</div>
                  <div className="testi-role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
