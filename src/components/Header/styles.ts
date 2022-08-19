import styled from 'styled-components'
import { navbarHeight } from '../../styles/variables'

const HeaderContainer = styled.header`
  padding: 32px 0;
  height: ${navbarHeight};

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`

const HeaderItemsBase = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;
`

const HeaderLocation = styled(HeaderItemsBase)`
  background-color: ${(props) => props.theme['purple-light']};
  gap: 0.25rem;

  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
`

const HeaderCart = styled(HeaderItemsBase)`
  background-color: ${(props) => props.theme['yellow-light']};
`

export { HeaderContainer, HeaderActions, HeaderLocation, HeaderCart }
