import { useState } from "react"
import { useTheme } from "styled-components"
import { useCart } from "../../hooks/useCart"
import { CoffeeImg, Container, Control, Description, Price, Tags, Title } from "./styles"

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()
  const { addItem } = useCart()


  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title}/>

      <Tags>
        {
          coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))
        }
      </Tags>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
      </Control>
    </Container>
  )
}
