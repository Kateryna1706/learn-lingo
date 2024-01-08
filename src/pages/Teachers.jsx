import Filter from 'components/Filter/Filter';
import TeacherList from 'components/TeacherList/TeacherList';
import { Container, Wrapper } from './TeachersPage.styled';

const Teachers = () => {
  return (
    <Container>
      <Wrapper>
        <Filter />
        <TeacherList />
      </Wrapper>
    </Container>
  );
};

export default Teachers;
