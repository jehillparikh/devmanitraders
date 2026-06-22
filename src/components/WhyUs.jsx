import './WhyUs.css'

const FEATURES = [
  {
    tag: 'Personal',
    title: 'Personalised Goal Planning',
    desc: 'Every plan is built around your goals and timeline — not a generic model portfolio.',
  },
  {
    tag: 'Open',
    title: 'Open-Architecture Advice',
    desc: "We recommend across AMCs based on fit, not a single fund house's product list.",
  },
  {
    tag: 'Dedicated',
    title: 'One Relationship Manager',
    desc: 'A person who knows your portfolio by name — not a rotating support queue.',
  },
  {
    tag: 'Transparent',
    title: 'No Hidden Fees',
    desc: "Every recommendation comes with what it costs and why we're suggesting it.",
  },
  {
    tag: 'Backed',
    title: 'Authorised Partner, Kotak Securities',
    desc: "Backed by one of India's most established brokerages, for added depth and reliability.",
  },
  {
    tag: 'Experienced',
    title: '35+ Years Combined Leadership',
    desc: 'Our management has navigated multiple market cycles — that judgement shapes every plan.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-section section" id="why">
      <div className="container">
        <div className="section-head reveal-head">
          <div className="eyebrow">Why Devmani</div>
          <h2>The discipline of an established firm, the responsiveness of a newer one.</h2>
          <p>
            We're an AMFI-registered Mutual Fund Distributor and Authorised Partner of Kotak Securities — 
            but what clients actually notice is how a plan is built, explained, and reviewed.
          </p>
        </div>
        <div className="why-grid">
          {FEATURES.map((f, i) => (
            <div key={f.tag} className="why-card reveal" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <span className="why-tag">{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
