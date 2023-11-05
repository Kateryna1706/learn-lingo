import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarstList/CarsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, getFilteredCars } from 'redux/cars/carsOperations';
import { Container } from './Pages.styled';
import { Modal } from 'components/Modal/Modal';
import {
  selectCars,
  selectFilter,
  selectVisibleCars,
} from 'redux/cars/carsSelectors';

const Cars = () => {
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const filteredCars = useSelector(selectVisibleCars);
  const visibleCars = Number(filter.filterPrice) > 0 ? filteredCars : cars;
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [modal, setModal] = useState({ isOpen: false, visibleData: null });
  const [loadMore, setLoadMore] = useState(false);

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
    if (filter.filterBrand.length !== 0) {
      dispatch(getFilteredCars({ page, make: filter.filterBrand }));
    } else {
      dispatch(fetchCars(page));
    }

    setLoadMore(page < Math.ceil(41 / 12));
  }, [dispatch, filter, page]);

  return (
    <Container>
      {modal.isOpen && <Modal car={modal.visibleData} onClick={closeModal} />}

      {cars.length !== 0 && (
        <>
          <Filter page={page} />
          <CarsList
            handleClickCar={handleClickCar}
            showMore={showMore}
            loadMore={loadMore}
            visibleCars={visibleCars}
          />
        </>
      )}
    </Container>
  );
};

export default Cars;
