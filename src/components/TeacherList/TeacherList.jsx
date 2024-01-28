import { useContext, useState } from 'react';
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
  Stub,
  Title,
  Wrapper,
} from './TeacherList.styled';

import { ReactComponent as Book } from '../Icons/book-open-01.svg';
import { ReactComponent as Star } from '../Icons/star.svg';
import { ReactComponent as Heart } from '../Icons/heart.svg';
import Modal from 'components/Modal/Modal';
import BookForm from 'components/Forms/BookForm';
import { onValue, ref, update } from 'firebase/database';
import { database } from '../../firebase-config';
import { Auth, FilterContex } from 'context';
import { Notify } from 'notiflix';

const TeacherList = ({ loadMore, showMore, teachersList }) => {
  const authContex = useContext(Auth);
  const user = authContex.currentUser.email;
  const isLoggedIn = authContex.isLoggedIn;

  const filter = useContext(FilterContex);
  const [teacherCardActive, setTeacherCardActive] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleClick = teacher => {
    setTeacherCardActive(teacher);
  };

  const openModal = data => {
    setDataModal(data);
    setIsModalOpen(true);
    document.body.classList.add('hidden');
  };

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };

  const handleClickHeart = id => {
    if (!isLoggedIn) {
      Notify.failure(
        'This functionality is available only to authorized users'
      );
      return;
    }
    onValue(
      ref(database, `teachers/${id}/`),
      snapshot => {
        let ownerList;
        const teacher = snapshot.val();
        if (teacher.owner?.includes(user)) {
          ownerList = teacher.owner.filter(item => item !== user);
        } else {
          ownerList = teacher.owner ? [user, ...teacher.owner] : [user];
        }

        const updates = {
          owner: [...ownerList],
        };

        const refValue = ref(database, `teachers/${id}/`);

        update(refValue, updates);
      },
      {
        onlyOnce: true,
      }
    );
  };

  return (
    <>
      {teachersList.length !== 0 ? (
        <List>
          {teachersList.map(teacher => (
            <ListItem key={teacher.id}>
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
                      Price / 1 hour:{' '}
                      <span className="price">
                        <pre> {teacher.price_per_hour}$</pre>
                      </span>
                    </Item>
                  </ListHeader>
                  <Heart
                    onClick={() => {
                      handleClickHeart(teacher.id);
                    }}
                    className="heart"
                    stroke={
                      teacher.owner &&
                      teacher.owner.includes(user) &&
                      teacher.owner !== ''
                        ? '#f4c550'
                        : '#121417'
                    }
                    fill={
                      teacher.owner &&
                      teacher.owner.includes(user) &&
                      teacher.owner !== ''
                        ? '#f4c550'
                        : 'transparent'
                    }
                  />
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
                    <BookForm data={dataModal} closeModal={closeModal} />
                  </Modal>
                )}
              </Wrapper>
            </ListItem>
          ))}
        </List>
      ) : (
        <Stub>Sorry, no teachers found</Stub>
      )}

      {loadMore && teachersList.length !== 0 && !filter && (
        <ButtonMore onClick={showMore}>Load more</ButtonMore>
      )}
    </>
  );
};

export default TeacherList;
