import { NavLink, Outlet } from 'react-router-dom'

const APP_URL = import.meta.env.VITE_APP_URL;


export default function Layout() {
  return (
    <>
      <header className="nav">
        <div className="container navin">
          <NavLink className="brand" to="/">
            <img src="/airhorn-icon.svg" alt="" />
            <span>Airhorn<span className="events">.events</span></span>
          </NavLink>
          <nav className="links">
            <NavLink to="/how-it-works">How it works</NavLink>
            <NavLink to="/platforms">Platforms</NavLink>
            <NavLink to="/pricing">Pricing & Services</NavLink>
            <a className="btn primary" href={APP_URL}>Get Started / Sign In</a>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="container foot">
          <div className="brand footerBrand">
            <img src="/airhorn-icon.svg" alt="" />
            <span>Airhorn<span className="events">.events</span></span>
          </div>
          <span>One event. More places. More people.</span>
        </div>
      </footer>
    </>
  )
}
