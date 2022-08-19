import styled from 'styled-components'

const SpecificationsContainer = styled.div`
  grid-row: 2;
  width: 588px;
  display: grid;
  grid-template-columns: 40% 60%;
  column-gap: 40px;
`

const Specification = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  p {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

const SpecificationIconBase = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const SpecificationCart = styled(SpecificationIconBase)`
  background: ${(props) => props.theme['yellow-dark']};
`

const SpecificationPackage = styled(SpecificationIconBase)`
  background: ${(props) => props.theme['base-text']};
`

const SpecificationTimer = styled(SpecificationIconBase)`
  background: ${(props) => props.theme.yellow};
`

const SpecificationCoffee = styled(SpecificationIconBase)`
  background: ${(props) => props.theme.purple};
`

export {
  SpecificationsContainer,
  Specification,
  SpecificationCart,
  SpecificationPackage,
  SpecificationTimer,
  SpecificationCoffee,
}
