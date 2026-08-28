const APP_URL = import.meta.env.VITE_APP_URL;

const sources = [
  ['/eventbrite.png', 'Eventbrite'],
  ['/facebook.png', 'Facebook'],
]

const destinations = [
  ['/funcheapsf.jpg', 'Funcheap SF'],
  ['/sfweekly.jpg', 'SF Weekly'],
  ['/dothebay.jpg', 'DoTheBay'],
  ['/visitoakland.jpg', 'Visit Oakland'],
  ['/sfstation.jpg', 'SF Station'],
  ['/indybay.jpg', 'IndyBay'],
]

export default function Platforms() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Supported platforms</div>
          <h1>Import once. Promote to more places.</h1>
          <p className="lede center">
            Start with an event you already created, then use Airhorn.events to move through
            supported Bay Area promotion destinations from one workflow.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow center">Import sources</div>
          <h2 className="center">Bring your existing event into Airhorn.</h2>
          <div className="platformGrid sourceGrid">
            {sources.map(([src, alt]) => (
              <div className="card platformCard" key={alt}>
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="eyebrow center">Promotion destinations</div>
          <h2 className="center">Reach six local event platforms.</h2>
          <div className="platformGrid">
            {destinations.map(([src, alt]) => (
              <div className="card platformCard" key={alt}>
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
          <p className="sub center platformNote">Local-first • lightweight • focused workflow</p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Promote from one workflow.</h2>
          <a className="btn white" href={APP_URL}>Get Started / Sign In</a>
        </div>
      </section>
    </main>
  )
}
