import { Link } from 'react-router-dom'

const APP_URL = import.meta.env.VITE_APP_URL;

const destinations = [
  ['/funcheapsf.jpg', 'Funcheap SF'],
  ['/sfweekly.jpg', 'SF Weekly'],
  ['/dothebay.jpg', 'DoTheBay'],
  ['/visitoakland.jpg', 'Visit Oakland'],
  ['/sfstation.jpg', 'SF Station'],
  ['/indybay.jpg', 'IndyBay'],
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="eyebrow">Local event promotion, simplified</div>
            <h1>Create or import once.<br />Promote from one workflow.</h1>
            <p className="lede">
              The easiest way for local businesses to get their events promoted across more places —
              without entering the same information over and over.
            </p>
            <div className="actions">
              <a className="btn primary" href={APP_URL}>Get Started</a>
              <Link className="btn" to="/how-it-works">See how it works</Link>
            </div>
            <p className="micro">Starting at $19.95 per event • Self-Service + Pro Service</p>
          </div>

          <div className="flowVisual" aria-label="Facebook and Eventbrite feed into Airhorn, which promotes to supported local platforms">
            <div className="sourceLabel">IMPORT FROM</div>
            <div className="sourceRow">
              <div className="logoTile sourceTile">
                <img src="/eventbrite.png" alt="Eventbrite" />
              </div>
              <div className="logoTile sourceTile facebookTile">
                <img src="/facebook.png" alt="Facebook" />
              </div>
            </div>

            <div className="flowLine downLine" />
            <img className="airhornPin" src="/airhorn-icon.svg" alt="Airhorn.events" />
            <div className="flowLine downLine lowerLine" />

            <div className="destinationLabel">PROMOTE TO</div>
            <div className="destinationGrid">
              {destinations.map(([src, alt]) => (
                <div className="logoTile destinationTile" key={alt}>
                  <img src={src} alt={alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow center">The problem</div>
          <h2 className="center">Promoting one event means entering the same information over and over.</h2>
          <p className="sub center">
            Copy, paste, reformat, track, repeat. Manual promotion across multiple event sites can take
            2–3 hours per event — about $60 in labor at $20/hour.
          </p>

          <div className="grid3">
            <div className="card">
              <div className="num">1</div>
              <h3>Create or import</h3>
              <p>Enter your event once, or bring in an existing Facebook or Eventbrite event.</p>
            </div>
            <div className="card">
              <div className="num">2</div>
              <h3>Promote</h3>
              <p>Move through supported local platforms from one focused workflow.</p>
            </div>
            <div className="card">
              <div className="num">3</div>
              <h3>Track</h3>
              <p>Keep promotion status and published destinations together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="eyebrow center">Already working</div>
          <h2 className="center">Airhorn.events is already promoting real events.</h2>
          <div className="proof">
            <div className="stat"><strong>3</strong><span>MONTHS — CONCEPT → WORKING BETA</span></div>
            <div className="stat"><strong>6</strong><span>PROMOTION PLATFORMS SUPPORTED TODAY</span></div>
            <div className="stat"><strong>6</strong><span>BETA USERS AND GROWING</span></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="eyebrow center">The practical middle</div>
          <h2 className="center">Simple local event promotion — without a broad marketing suite.</h2>
          <p className="sub center">
            Airhorn.events fills the gap between complex marketing ecosystems and doing it yourself.
          </p>
          <div className="actions centered">
            <Link className="btn primary" to="/pricing">View Pricing & Services</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>One event. More places. More people.</h2>
          <p>Start promoting with Airhorn.events.</p>
          <a className="btn white" href={APP_URL}>Get Started / Sign In</a>
        </div>
      </section>
    </main>
  )
}
