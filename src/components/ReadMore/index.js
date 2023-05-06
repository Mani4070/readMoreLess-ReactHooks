// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Container,
  Title,
  Subtitles,
  Image,
  Paragraph,
  Button,
} from './styledComponents'

const ReactMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'
  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)
  return (
    <MainContainer>
      <Container>
        <Title>React Hooks</Title>
        <Subtitles>Hooks are a new addition to React</Subtitles>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Paragraph>{description}</Paragraph>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </Container>
    </MainContainer>
  )
}
export default ReactMore
