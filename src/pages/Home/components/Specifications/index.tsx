import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  Specification,
  SpecificationCart,
  SpecificationCoffee,
  SpecificationPackage,
  SpecificationsContainer,
  SpecificationTimer,
} from './styles'

function Specifications() {
  return (
    <SpecificationsContainer>
      <Specification>
        <SpecificationCart>
          <ShoppingCart size={16} weight="fill" color="#FFF" />
        </SpecificationCart>
        <p>Compra simples e segura</p>
      </Specification>

      <Specification>
        <SpecificationPackage>
          <Package size={16} weight="fill" color="#FFF" />
        </SpecificationPackage>
        <p>Embalagem mantém o café intacto</p>
      </Specification>

      <Specification>
        <SpecificationTimer>
          <Timer size={16} weight="fill" color="#FFF" />
        </SpecificationTimer>
        <p>Entrega rápida e rastreada</p>
      </Specification>

      <Specification>
        <SpecificationCoffee>
          <Coffee size={16} weight="fill" color="#FFF" />
        </SpecificationCoffee>
        <p>O café chega fresquinho até você</p>
      </Specification>
    </SpecificationsContainer>
  )
}

export { Specifications }
