import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { CoffeeList, Heading, Hero, HeroContent, Info } from "./styles";

import { coffees } from "../../../data.json"
import { Card } from "../../components/Card";

export function Home() {
  const theme = useTheme()
  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Found the coffee perfect all time day</h1>
              <span>
                With Coffee Delivery you receive your coffee where it, all time.
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                />
                <span>Buy with security and simple</span>
              </div>
              
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{backgroundColor: theme.colors['base-text'] }}
                />
                <span>Packaging keeps coffee intact</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{backgroundColor: theme.colors.yellow }}
                />
                <span>Fast delivery and dryness</span>
              </div>

              
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{backgroundColor: theme.colors.purple }}
                />
                <span>The coffee arrives fresh to you</span>
              </div>
            </Info>
          </div>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery"/>
        </HeroContent>

        <img src="/images/hero-bg.svg" id="hero-bg" alt=""/>
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee}/>
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
