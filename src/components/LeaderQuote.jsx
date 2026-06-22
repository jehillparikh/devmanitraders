import './Testimonials.css'

export default function LeaderQuote() {
  return (
    <section className="testimonial-section section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="leader-quote reveal">
          <blockquote>
            "Devmani Traders combines the discipline of a traditional advisory practice with the responsiveness clients expect today. Their grounding in the Kotak Securities ecosystem makes them a dependable distribution partner for retail investors."
          </blockquote>
          <div className="leader-cite">
            <strong>Aashish Somaiyaa</strong> — Executive Director, Kotak Securities
          </div>
        </div>
      </div>
    </section>
  )
}
