import { useState } from 'react'
import './ChatFab.css'

export default function ChatFab() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button 
        className="chat-fab" 
        onClick={() => setOpen(!open)}
        aria-label="Open chat assistant"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </button>

      <div className={`chat-panel ${open ? 'open' : ''}`}>
        <div className="chat-head">
          <strong>Devmani AI Assistant</strong>
          <button className="chat-close" onClick={() => setOpen(false)}>×</button>
        </div>
        <p className="chat-text">👋 Coming soon — our AI assistant will help answer quick questions instantly. For now, a real advisor is just a call away.</p>
        <a href="tel:7304873697" className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>Call an Advisor</a>
      </div>
    </>
  )
}
