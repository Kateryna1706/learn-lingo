import { CarsList } from 'components/CarstList/CarsList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './Pages.styled';
import { Modal } from 'components/Modal/Modal';
import { selectCars, selectFavorites } from 'redux/cars/carsSelectors';

export default function Favorites() {
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState({ isOpen: false, visibleData: null });
  const [loadMore, setLoadMore] = useState(false);
  const favoritesCars = useSelector(selectFavorites);

  const showMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleClickCar = id => {
    const index = cars.findIndex(item => item.id === id);
    setModal({
      isOpen: true,
      visibleData: cars[index],
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      visibleData: null,
    });
  };

  useEffect(() => {
    setLoadMore(page < Math.ceil(41 / 12));
  }, [page]);

  return (
    <Container>
      {modal.isOpen && <Modal car={modal.visibleData} onClick={closeModal} />}
      <h1>
        {favoritesCars.length === 0 ? 'No cars in favorites' : 'Favorites'}
      </h1>

      {favoritesCars.length !== 0 && (
        <>
          <CarsList
            handleClickCar={handleClickCar}
            showMore={showMore}
            loadMore={loadMore}
            visibleCars={favoritesCars}
          />
        </>
      )}
    </Container>
  );
}
