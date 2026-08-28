import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Platforms from './pages/Platforms'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="platforms" element={<Platforms />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    </Routes>
  )
}
