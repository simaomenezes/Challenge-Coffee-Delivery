import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/Themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello Reacj</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
