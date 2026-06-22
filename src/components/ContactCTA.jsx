import './ContactCTA.css'

export default function ContactCTA() {
  return (
    <section className="contact-band section-tight" id="contact">
      <div className="container">
        <div className="contact-box reveal">
          <div className="contact-text">
            <h2>Ready to start, or just have questions?</h2>
            <p>No forms to fill in advance — a relationship manager will call you back, usually within a working day.</p>
          </div>
          <div className="contact-actions">
            <a href="tel:+912242134213" className="btn btn-primary">Call +91-22-4213 4213</a>
            <a href="mailto:contactus@devmanitraders.com" className="btn btn-outline">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
