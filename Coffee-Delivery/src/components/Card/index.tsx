import {
  CardContainer,
  CoffeeImg,
  Control,
  Description,
  Order,
  Price,
  Title,
} from './styles'
import coffeeImagem from '../../assets/coffee-Image.svg'
import { ShoppingCart } from 'phosphor-react'
export function Card() {
  return (
    <CardContainer>
      <CoffeeImg src={coffeeImagem} alt="Coffee Imagem" />
      <Title>Titulo aqui</Title>
      <Description>Descrição aqui</Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>12</span>
        </Price>

        <Order>
          <button>
            <ShoppingCart size={22} />
          </button>
        </Order>
      </Control>
    </CardContainer>
  )
}
