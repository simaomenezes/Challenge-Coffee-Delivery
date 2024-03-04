import { useTheme } from 'styled-components'
import { Container, Heading, Info, InfoContent, Order } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import delivery from '../../assets/Illustration.svg'

export function Success() {
  const theme = useTheme()
  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
              />

              <div>
                <span>
                  Entrega em <strong>Descrição do texto</strong>
                </span>

                <span>Descrição do texto</span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>Descrição do texto</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src={delivery} alt="Pedido concluído" />
    </Container>
  )
}
