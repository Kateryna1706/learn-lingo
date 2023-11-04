import { useSelector } from 'react-redux';
import {
  Button,
  ContainerDescription,
  ContainerMakeAndPrice,
  List,
  ListItem,
  More,
} from './CarsList.styled';
import {
  selectCars,
  selectFilter,
  selectVisibleCars,
} from 'redux/cars/carsSelectors';

// const photoTrial =
//   'C:UsersKaterina ZykovaDesktopGitHubcar-rental-appsrcimgimage 1 (1).png';

export const CarsList = ({ handleClickCar, showMore, loadMore }) => {
  // const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectVisibleCars);
  const visibleCars =
    filter.filterPrice.length !== 0 ? filteredCars : cars;
  console.log(visibleCars);
  console.log(filter.filterPrice);
  return (
    <>
      <List>
        {visibleCars.map(car => (
          <ListItem key={car.id}>
            <img src={car.img} alt="" width="274"></img>
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
      {loadMore && <More onClick={() => showMore()}>Load more</More>}
    </>
  );
};
