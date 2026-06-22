import { useParams, Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blogs'
import ContactCTA from '../components/ContactCTA'
import './Page.css'
import './Blog.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) {
    return (
      <main>
        <div className="page-hero">
          <div className="container">
            <h1>Article Not Found</h1>
            <Link to="/blog" className="btn btn-primary" style={{marginTop: '24px'}}>Back to Insights</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal-head">
            <Link to="/blog" className="back-link">← Back to all articles</Link>
            <div className="blog-meta" style={{marginTop: '24px'}}>
              <span className="blog-tag">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <h1>{post.title}</h1>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div 
            className="article-content reveal" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
