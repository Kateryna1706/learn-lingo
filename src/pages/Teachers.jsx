import Filter from 'components/Filter/Filter';
import TeacherList from 'components/TeacherList/TeacherList';
import { Container, Wrapper } from './ListPage.styled';
import { useContext, useEffect, useState } from 'react';
import { FilterContex } from 'context';
import { ref, onValue, query, orderByKey, endBefore } from 'firebase/database';
import { database } from '../firebase-config';

const Teachers = ({ changeFilter }) => {
  const filter = useContext(FilterContex);
  const [teachersList, setTeachersList] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [loadMore, setLoadMore] = useState(false);

  const showMore = () => {
    setPage(prevState => prevState + 1);
    setLimit(prevState => prevState + 4);
  };

  const updateList = () => {
    const dbRef = ref(database, 'teachers');

    const queryRef = query(dbRef, orderByKey(`id`), endBefore(`${limit}`));

    onValue(queryRef, snapshot => {
      const list = snapshot.val();

      setTeachersList(list);
      setLoadMore(page < Math.ceil(30 / 4));
    });
    setPage(1);
    setLimit(4);
  };

  useEffect(() => {
    if (!filter) return;

    if (filter.firstFilter) {
      onValue(ref(database, 'teachers'), snapshot => {
        let list;
        if (filter.filter === 'price_per_hour') {
          list = snapshot
            .val()
            .filter(item => item[filter.filter] <= filter.value);
        } else {
          list = snapshot
            .val()
            .filter(item => item[filter.filter].includes(filter.value));
        }

        setTeachersList(list);
      });
    } else {
      if (filter.filter === 'price_per_hour') {
        setTeachersList(prevState =>
          prevState.filter(item => item[filter.filter] <= filter.value)
        );
      } else {
        setTeachersList(prevState =>
          prevState.filter(item => item[filter.filter].includes(filter.value))
        );
      }
    }
  }, [filter]);

  useEffect(() => {
    const dbRef = ref(database, 'teachers');

    const queryRef = query(dbRef, orderByKey(`id`), endBefore(`${limit}`));

    onValue(queryRef, snapshot => {
      const list = snapshot.val();

      setTeachersList(list);
      setLoadMore(page < Math.ceil(30 / 4));
    });
  }, [limit, page]);

  console.log(page);
  console.log(limit);

  return (
    <Container>
      <Wrapper>
        <Filter changeFilter={changeFilter} updateList={updateList} />
        <TeacherList
          loadMore={loadMore}
          showMore={showMore}
          teachersList={teachersList}
        />
      </Wrapper>
    </Container>
  );
};

export default Teachers;
