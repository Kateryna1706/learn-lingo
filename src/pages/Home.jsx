import Advantages from 'components/Advantages/Advantages';
import Description from 'components/Description/Description';
import { ContainerPage } from './HomePage.styled';

const Home = () => {
  return (
    <ContainerPage>
      <Description></Description>
      <Advantages></Advantages>
    </ContainerPage>
  );
};

export default Home;
