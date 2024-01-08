import {
  Button,
  ContainerDescription,
  ContainerSection,
  FirstParagraph,
  SecondParagraph,
  WordWrapper,
} from './Description.styled';
import Girl from '../../images/block.jpg';
import { useNavigate } from 'react-router-dom';

const Description = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <ContainerSection>
      <ContainerDescription>
        <FirstParagraph>
          Unlock your potential with the best{' '}
          <WordWrapper>language</WordWrapper> tutors
        </FirstParagraph>
        <SecondParagraph>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </SecondParagraph>
        <Button onClick={handleClick}>Get started</Button>
      </ContainerDescription>
      <img src={`${Girl}`} alt="girl with laptop"></img>
    </ContainerSection>
  );
};

export default Description;
