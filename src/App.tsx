import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { AppContainer } from './styles'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContainer>
          <Header />
          <h1>Coffee Delivery</h1>
        </AppContainer>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
