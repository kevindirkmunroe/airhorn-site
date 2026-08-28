const APP_URL = 'https://bep-ui.onrender.com'

export default function Pricing() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Pricing & Services</div>
          <h1>Use Airhorn.events yourself — or hand us the job.</h1>
          <p className="lede center">
            Self-Service when you want the workflow and control. Pro Service when you want us to handle the promotion.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prices">
            <div className="card">
              <div className="eyebrow">Self-Service</div>
              <h3>You promote with Airhorn.events.</h3>
              <p>Use your Airhorn account and promotion workflow yourself.</p>

              <div className="priceRow">
                <div className="mini"><span>ONE-TIME EVENT</span><strong>$19.95</strong></div>
                <div className="mini"><span>RECURRING</span><strong>$14.95/mo</strong></div>
              </div>

              <ul>
                <li>Airhorn.events account</li>
                <li>Create or import your event</li>
                <li>Supported promotion workflow</li>
                <li>Platform status tracking</li>
              </ul>

              <a className="btn" href={APP_URL}>Get Started</a>
            </div>

            <div className="card featured">
              <div className="eyebrow">Pro Service</div>
              <h3>Send us your event. We promote it.</h3>
              <p>Hand off the promotion work to Airhorn.events.</p>

              <div className="priceRow">
                <div className="mini"><span>ONE-TIME EVENT</span><strong>$29.95</strong></div>
                <div className="mini"><span>RECURRING</span><strong>$24.95/mo</strong></div>
              </div>

              <ul>
                <li>Account managed by Airhorn.events</li>
                <li>Airhorn handles event promotion</li>
                <li>Supported destination workflow</li>
                <li>Promotion completion tracking</li>
              </ul>

              <a className="btn primary" href={APP_URL}>Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="center">The practical middle.</h2>
          <p className="sub center">
            Manual promotion can mean copy/paste, multiple forms, manual tracking, 2–3 hours per event
            and about $60 in labor per promotion cycle. Airhorn.events starts at $19.95 per event.
          </p>
        </div>
      </section>
    </main>
  )
}
