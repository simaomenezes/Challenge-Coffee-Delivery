import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Success } from './pages/Success'
import { Car } from './pages/Cart'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Car />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
