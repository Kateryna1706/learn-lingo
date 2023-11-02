import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarstList/CarsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';
import { selectCars } from 'redux/cars/carsSelectors';
import { Container } from './Pages.styled';

export default function Cars() {
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Container>
      <h1>Cars</h1>

      {cars.length !== 0 && (
        <>
          <Filter />
          <CarsList />
        </>
      )}
    </Container>
  );
}
