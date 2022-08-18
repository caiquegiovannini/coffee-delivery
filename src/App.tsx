import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { AppContainer } from './styles'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Home />
        </AppContainer>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
