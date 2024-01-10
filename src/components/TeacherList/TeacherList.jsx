import { useEffect, useState } from 'react';
import {
  AvatarWrapper,
  ButtonBook,
  ButtonMore,
  ButtonReadMore,
  Experience,
  HeaderCard,
  Item,
  ItemDescription,
  Level,
  LevelsList,
  List,
  ListHeader,
  ListItem,
  NameTeacher,
  ReviewerAvatar,
  ReviewerInfo,
  ReviewerList,
  Title,
  Wrapper,
} from './TeacherList.styled';
import { ref, onValue, query, orderByKey, endBefore } from 'firebase/database';
import { database } from '../../firebase-config';
import { ReactComponent as Book } from '../Icons/book-open-01.svg';
import { ReactComponent as Star } from '../Icons/star.svg';
import { ReactComponent as Heart } from '../Icons/heart.svg';
import Modal from 'components/Modal/Modal';
import BookForm from 'components/Forms/BookForm';

const TeacherList = () => {
  const [teacherCardActive, setTeacherCardActive] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [teachersList, setTeachersList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [loadMore, setLoadMore] = useState(false);

  const showMore = () => {
    setPage(prevState => prevState + 1);
    setLimit(prevState => prevState + 4);
  };

  const handleClick = teacher => {
    setTeacherCardActive(teacher);
  };

  const openModal = data => {
    setDataModal(data);
    setIsModalOpen(true);
  };

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
  };

  useEffect(() => {
    const dbRef = ref(database, 'teachers');

    const queryRef = query(
      dbRef,
      orderByKey(`id`),

      endBefore(`${limit}`)
    );

    onValue(queryRef, snapshot => {
      console.log(snapshot.val());
      setTeachersList(snapshot.val());
      setLoadMore(page < Math.ceil(30 / 4));
    });
  }, [limit, page]);

  return (
    <>
      <List>
        {teachersList.map(teacher => (
          <ListItem key={`${teacher.name} ${teacher.surname}`}>
            <AvatarWrapper>
              <img
                src={teacher.avatar_url}
                alt="teacher avatar"
                width={96}
                height={96}
              />
            </AvatarWrapper>
            <Wrapper>
              <HeaderCard>
                <Title>Languages</Title>
                <ListHeader>
                  <Item>
                    <Book className="icon" />
                    <span>Lessons online</span>
                  </Item>
                  <Item>Lessons done: {teacher.lessons_done}</Item>
                  <Item>
                    <Star className="icon" />
                    <span>Rating: {teacher.rating}</span>
                  </Item>
                  <Item>
                    Price / 1 hour:
                    <span className="price">{teacher.price_per_hour}$</span>
                  </Item>
                </ListHeader>
                <Heart />
              </HeaderCard>
              <NameTeacher>{`${teacher.name} ${teacher.surname}`}</NameTeacher>
              <ItemDescription>
                <Title>Speaks:</Title>{' '}
                <span className="description languages">
                  {teacher.languages.length > 1
                    ? teacher.languages.join(',')
                    : teacher.languages}
                </span>
              </ItemDescription>
              <ItemDescription>
                <Title>Lesson Info:</Title>{' '}
                <span className="description">{teacher.lesson_info}</span>
              </ItemDescription>
              <ItemDescription>
                <Title>Conditions:</Title>{' '}
                <span className="description">{teacher.conditions}</span>
              </ItemDescription>
              {teacherCardActive !== `${teacher.name} ${teacher.surname}` && (
                <ButtonReadMore
                  onClick={() =>
                    handleClick(`${teacher.name} ${teacher.surname}`)
                  }
                >
                  Read more
                </ButtonReadMore>
              )}
              {teacherCardActive === `${teacher.name} ${teacher.surname}` && (
                <Experience>{teacher.experience}</Experience>
              )}
              {teacherCardActive === `${teacher.name} ${teacher.surname}` && (
                <ReviewerList>
                  {teacher.reviews.map(review => (
                    <li key={review.reviewer_name}>
                      <ReviewerInfo>
                        <ReviewerAvatar>
                          {/* <img alt=" "></img> */}
                        </ReviewerAvatar>
                        <div>
                          <Title className="reviewer">
                            {review.reviewer_name}
                          </Title>
                          <div>
                            <Star className="reviewerStar"></Star>
                            <span className="rating">
                              {review.reviewer_rating}.0
                            </span>
                          </div>
                        </div>
                      </ReviewerInfo>
                      <p className="comment">{review.comment}</p>
                    </li>
                  ))}
                </ReviewerList>
              )}
              <LevelsList>
                {teacher.levels.map((level, index) => (
                  <li key={index}>
                    <Level>#{level}</Level>
                  </li>
                ))}
              </LevelsList>
              {teacherCardActive === `${teacher.name} ${teacher.surname}` && (
                <ButtonBook
                  onClick={() =>
                    openModal({
                      teacher: `${teacher.name} ${teacher.surname}`,
                      teacherAvatar: teacher.avatar_url,
                    })
                  }
                >
                  Book trial lesson
                </ButtonBook>
              )}
              {isModalOpen && (
                <Modal closeModal={closeModal}>
                  <BookForm data={dataModal} />
                </Modal>
              )}
            </Wrapper>
          </ListItem>
        ))}
      </List>
      {loadMore && <ButtonMore onClick={showMore}>Load more</ButtonMore>}
    </>
  );
};

export default TeacherList;
