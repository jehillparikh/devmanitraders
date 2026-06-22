import './Team.css'

const TEAM = [
  { name: 'Manish Parikh', role: 'Founder & CEO' },
  { name: 'Jehill Parikh', role: 'Technology & Research Lead' },
  { name: 'Ambika Panwalkar', role: 'Compliance Lead' },
  { name: 'Kunal Tiwari', role: 'Investment Analyst' },
]

export default function Team() {
  return (
    <section className="team-section section" id="team">
      <div className="container">
        <div className="section-head reveal-head">
          <div className="eyebrow">Our Team</div>
          <h2>The people managing the practice.</h2>
          <p>A tight-knit core team ensuring consistency across research, compliance, and client experience.</p>
        </div>
        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div key={member.name} className="team-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="team-avatar">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
