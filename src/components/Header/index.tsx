import {
  HeaderActions,
  HeaderCart,
  HeaderContainer,
  HeaderLocation,
} from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { defaultTheme } from '../../styles/themes/default'

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img
            src={logoCoffeeDelivery}
            alt="imagem de um copo de café do lado esquerdo e do lado direito o texto Coffee Delivery"
          />
        </NavLink>

        <HeaderActions>
          <HeaderLocation>
            <MapPin size={22} color={defaultTheme.purple} weight="fill" />
            São Paulo, SP
          </HeaderLocation>

          <NavLink to="/cart" title="Carrinho">
            <HeaderCart>
              <ShoppingCart
                size={22}
                color={defaultTheme['yellow-dark']}
                weight="fill"
              />
            </HeaderCart>
          </NavLink>
        </HeaderActions>
      </nav>
    </HeaderContainer>
  )
}

export { Header }
