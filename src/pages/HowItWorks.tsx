import { Link } from 'react-router-dom'

export default function HowItWorks() {
  const steps = [
    ['Create or import', 'Enter your event once, or import an existing Facebook or Eventbrite event.'],
    ['Choose destinations', "Move through Airhorn's supported local event-promotion platforms."],
    ['Reduce repetitive work', 'Airhorn helps with the repetitive parts of destination forms.'],
    ['Review and submit', 'Stay in control of destination-specific details and the final submission.'],
    ['Track progress', 'See which platforms are not started, in progress, or submitted.'],
    ['Or hand us the job', 'With Pro Service, send us your event and Airhorn promotes it for you.'],
  ]

  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">How it works</div>
          <h1>One event. One workflow.</h1>
          <p className="lede center">
            Create or import your event once, then promote it across supported local event sites
            without starting from scratch each time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid3">
            {steps.map((step, i) => (
              <div className="card" key={step[0]}>
                <div className="num">{i + 1}</div>
                <h3>{step[0]}</h3>
                <p>{step[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to promote?</h2>
          <Link className="btn white" to="/pricing">See Pricing & Services</Link>
        </div>
      </section>
    </main>
  )
}
