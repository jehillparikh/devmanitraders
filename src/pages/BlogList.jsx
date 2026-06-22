import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blogs'
import ContactCTA from '../components/ContactCTA'
import './Page.css'
import './Blog.css'

export default function BlogList() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal-head">
            <div className="eyebrow">Insights & Articles</div>
            <h1>Perspective on the markets, and how to navigate them.</h1>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {BLOG_POSTS.map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="blog-meta">
                  <span className="blog-tag">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-read-more">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
