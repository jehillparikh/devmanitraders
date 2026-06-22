import { useState } from 'react'
import ContactCTA from '../components/ContactCTA'
import './Page.css'
import './RiskAssessment.css'

const QUESTIONS = [
  {
    id: 'horizon',
    question: 'How long do you plan to keep your money invested before needing it?',
    options: [
      { text: 'Less than 3 years', score: 1 },
      { text: '3 to 7 years', score: 2 },
      { text: 'More than 7 years', score: 3 }
    ]
  },
  {
    id: 'reaction',
    question: 'If your investment portfolio dropped by 20% in a month due to a market crash, what would you do?',
    options: [
      { text: 'Sell everything to prevent further losses', score: 1 },
      { text: 'Wait it out and do nothing', score: 2 },
      { text: 'Invest more while prices are low', score: 3 }
    ]
  },
  {
    id: 'goal',
    question: 'What is your primary investment goal?',
    options: [
      { text: 'Preserve my capital and avoid losing money', score: 1 },
      { text: 'Generate stable income with moderate growth', score: 2 },
      { text: 'Maximize long-term growth, accepting higher risks', score: 3 }
    ]
  },
  {
    id: 'liquidity',
    question: 'How much of your total liquid savings will this investment represent?',
    options: [
      { text: 'More than 75%', score: 1 },
      { text: 'Between 25% and 75%', score: 2 },
      { text: 'Less than 25%', score: 3 }
    ]
  },
  {
    id: 'experience',
    question: 'How would you describe your experience with investing in financial markets?',
    options: [
      { text: 'Novice - I have little to no experience', score: 1 },
      { text: 'Intermediate - I understand the basics of stocks and bonds', score: 2 },
      { text: 'Advanced - I am very experienced with market volatility', score: 3 }
    ]
  }
]

export default function RiskAssessment() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const handleSelect = (questionId, score) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }))
    
    // Auto-advance
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setTimeout(() => setShowResult(true), 300)
    }
  }

  const reset = () => {
    setAnswers({})
    setCurrentStep(0)
    setShowResult(false)
  }

  // Calculate result
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0)
  let profile = { name: '', desc: '' }
  if (totalScore <= 7) {
    profile = {
      name: 'Conservative',
      desc: 'You prioritize capital preservation over high returns. You are not comfortable with significant market fluctuations. A portfolio leaning heavily towards debt instruments, fixed deposits, and highly stable blue-chip equity is likely best for you.'
    }
  } else if (totalScore <= 11) {
    profile = {
      name: 'Balanced',
      desc: 'You seek a balance between capital growth and safety. You can tolerate moderate market dips in pursuit of better returns over time. A hybrid portfolio blending equity and debt funds fits your profile.'
    }
  } else {
    profile = {
      name: 'Aggressive / Growth',
      desc: 'You are looking for maximum long-term growth and are entirely comfortable with high market volatility. You have a long time horizon. A portfolio dominated by direct equity and equity mutual funds suits your objectives.'
    }
  }

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal-head">
            <div className="eyebrow">Interactive Tool</div>
            <h1>Investor Risk Profiler.</h1>
            <p>Answer 5 quick questions to understand your risk tolerance and what type of portfolio structure suits you best.</p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="quiz-container reveal">
            {!showResult ? (
              <div className="quiz-question-wrapper">
                <div className="quiz-progress">
                  Question {currentStep + 1} of {QUESTIONS.length}
                </div>
                <div className="quiz-progress-bar">
                  <div className="quiz-progress-fill" style={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }} />
                </div>
                
                <h3 className="quiz-question">{QUESTIONS[currentStep].question}</h3>
                
                <div className="quiz-options">
                  {QUESTIONS[currentStep].options.map((opt, i) => {
                    const isSelected = answers[QUESTIONS[currentStep].id] === opt.score
                    return (
                      <button 
                        key={i}
                        className={`quiz-opt-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelect(QUESTIONS[currentStep].id, opt.score)}
                      >
                        {opt.text}
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="quiz-result-wrapper">
                <div className="eyebrow">Your Result</div>
                <h2 className="quiz-result-title">{profile.name} Investor</h2>
                <p className="quiz-result-desc">{profile.desc}</p>
                <div className="quiz-actions">
                  <button onClick={reset} className="btn btn-outline">Retake Quiz</button>
                  <a href="#contact" className="btn btn-primary">Discuss with an Advisor</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
