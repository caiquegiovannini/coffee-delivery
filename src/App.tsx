import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <h1>Coffee Delivery</h1>
      <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
