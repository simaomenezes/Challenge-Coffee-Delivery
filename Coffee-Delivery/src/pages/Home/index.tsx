import { Intro } from '../../components/Intro/indext'
import { HomeContainer, ContextContainer, Heading } from './styles'
import introImagem from '../../assets/intro_Imagem.svg'
import { CoffeeList } from '../../components/CoffeeList'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <ContextContainer>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Intro />
            <CoffeeList />
          </div>
          <img src={introImagem} alt="Café do Coffee Delivery" />
        </ContextContainer>
      </HomeContainer>
    </div>
  )
}
