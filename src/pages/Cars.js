import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarstList/CarsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';
import { selectCars } from 'redux/cars/carsSelectors';
import { Container } from './Pages.styled';
import { Modal } from 'components/Modal/Modal';

export default function Cars() {
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  // const [page, setPage] = useState(1);
  //  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, visibleData: null });
  // const [loadMore, setLoadMore] = useState(false);

  //  const changeValue = value => {
  //    setValue(value);
  //    setPage(1);
  //    setImages([]);
  //  };

  // const showMore = () => {
  //   setPage(prevState => prevState + 1);
  // };

  const handleClickCar = id => {
    const index = cars.findIndex(item => item.id === id);
    console.log(cars[index]);
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
    dispatch(fetchCars());
    // setLoadMore(page < Math.ceil(response.data.totalHits / 12));
  }, [dispatch]);

  return (
    <Container>
      {modal.isOpen && <Modal car={modal.visibleData} onClick={closeModal} />}
      <h1>Cars</h1>

      {cars.length !== 0 && (
        <>
          <Filter />
          <CarsList handleClickCar={handleClickCar} />
        </>
      )}
    </Container>
  );
}
