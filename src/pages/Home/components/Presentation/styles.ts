import styled from 'styled-components'

import { navbarHeight } from '../../../../styles/variables'

const PresentationContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 476px;
  column-gap: 3.5rem;
  padding: 5.75rem 0;
`

const PresentationTitle = styled.div`
  grid-row: 1;
  width: 588px;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

const PresentationImage = styled.img`
  grid-row: span 2;
`

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  top: ${navbarHeight};
  left: 0;
`

export {
  PresentationContainer,
  PresentationTitle,
  PresentationImage,
  BackgroundImage,
}
