import { Auth, FilterContex } from 'context';
import { Container, Wrapper } from './ListPage.styled';
import Filter from 'components/Filter/Filter';
import TeacherList from 'components/TeacherList/TeacherList';
import { database } from 'firebase-config';
import { onValue, ref } from 'firebase/database';
import { useContext, useEffect, useState } from 'react';

const Favorites = ({ changeFilter }) => {
  const authContex = useContext(Auth);
  const user = authContex.currentUser.email;
  const filter = useContext(FilterContex);

  const [teachersList, setTeachersList] = useState([]);

  const updateList = () => {
    const dbRef = ref(database, 'teachers');

    onValue(dbRef, snapshot => {
      const list = snapshot
        .val()
        .filter(item => item.owner && item.owner.includes(user));
      setTeachersList(list);
    });
  };

  useEffect(() => {
    if (!filter) return;

    if (filter.filter === 'price_per_hour') {
      setTeachersList(prevState =>
        prevState.filter(item => item[filter.filter] <= filter.value)
      );
    } else {
      setTeachersList(prevState =>
        prevState.filter(item => item[filter.filter].includes(filter.value))
      );
    }
  }, [filter]);

  useEffect(() => {
    const dbRef = ref(database, 'teachers');

    onValue(dbRef, snapshot => {
      const list = snapshot
        .val()
        .filter(item => item.owner && item.owner.includes(user));
      setTeachersList(list);
    });
  }, [user]);

  return (
    <Container>
      <Wrapper>
        <Filter changeFilter={changeFilter} updateList={updateList} />
        <TeacherList teachersList={teachersList} />
      </Wrapper>
    </Container>
  );
};

export default Favorites;
