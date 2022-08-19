import {
  BackgroundImage,
  PresentationContainer,
  PresentationImage,
  PresentationTitle,
} from './styles'

import presentationBackground from '../../../../assets/presentation-background.svg'
import coffeeImage from '../../../../assets/presentation-coffee-image.svg'
import { Specifications } from '../Specifications'

function Presentation() {
  return (
    <PresentationContainer>
      <PresentationTitle>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
      </PresentationTitle>
      <Specifications />
      <PresentationImage
        src={coffeeImage}
        alt="imagem de um copo de café com café moído e em grãos atrás"
      />

      <BackgroundImage src={presentationBackground} alt="" />
    </PresentationContainer>
  )
}

export { Presentation }
