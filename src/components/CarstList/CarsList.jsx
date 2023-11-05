import {
  Button,
  ContainerDescription,
  ContainerMakeAndPrice,
  List,
  ListItem,
  More,
  Position,
} from './CarsList.styled';
import { ReactComponent as Heart } from '../Icons/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFavorites } from 'redux/cars/carsSelectors';
import { addFavorites, deleteFavorites } from 'redux/cars/favoritesSlice';

export const CarsList = ({
  handleClickCar,
  showMore,
  loadMore,
  visibleCars,
}) => {
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavorites);
  const cars = useSelector(selectCars);

  const handleClickHeart = carId => {
    const isFavorite = favoritesCars.some(item => item.id === carId);
    const index = cars.findIndex(item => item.id === carId);

    if (isFavorite) {
      dispatch(deleteFavorites(carId));
    }
    if (!isFavorite) {
      const newItem = cars[index];
      dispatch(addFavorites(newItem));
    }
  };

  return (
    <>
      <List>
        {visibleCars.map(car => (
          <ListItem key={car.id}>
            <Position>
              <Heart
                className="heart"
                stroke={
                  favoritesCars.some(item => item.id === car.id)
                    ? '#3470ff'
                    : '#FFFFFF'
                }
                fill={
                  favoritesCars.some(item => item.id === car.id)
                    ? '#3470ff'
                    : 'transparent'
                }
                onClick={() => handleClickHeart(car.id)}
              />
              <img src={car.img} alt="" width="274"></img>
            </Position>

            <ContainerMakeAndPrice>
              <p>{`${car.make}, ${car.year}`}</p>
              <p>{car.rentalPrice}</p>
            </ContainerMakeAndPrice>
            <ContainerDescription>
              <p>{car.address.split(',').slice(1, 2)}</p>
              <p>{car.address.split(',').slice(2)}</p>
              <p>{car.rentalCompany}</p>
            </ContainerDescription>
            <ContainerDescription>
              <p>{car.type}</p>
              <p>{car.model}</p>
              <p>{car.id}</p>
              <p>{car.functionalities[0]}</p>
            </ContainerDescription>
            <Button onClick={() => handleClickCar(car.id)}>Learn more</Button>
          </ListItem>
        ))}
      </List>
      {loadMore && visibleCars.length !== 0 && visibleCars.length > 12 && (
        <More onClick={() => showMore()}>Load more</More>
      )}
    </>
  );
};
