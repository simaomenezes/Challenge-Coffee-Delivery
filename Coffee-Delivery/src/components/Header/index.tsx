import { Aside, Container } from './styles'

import LogoCoffeeDelivery from '../../assets/Logo_Coffee_Delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <img src={LogoCoffeeDelivery} alt="Logo Coffee Delivery" />
      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Lisbos, Portugal, LB</span>
        </div>

        <ShoppingCart size={22} weight="fill" />
      </Aside>
    </Container>
  )
}
