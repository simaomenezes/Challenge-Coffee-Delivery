import { Card } from '../Card'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <div>
        <Card />
      </div>
    </CoffeeListContainer>
  )
}
