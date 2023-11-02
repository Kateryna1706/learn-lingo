import { useSelector } from 'react-redux';
import {
  Button,
  ContainerDescription,
  ContainerMakeAndPrice,
  List,
  ListItem,
} from './CarsList.styled';
import { selectCars } from 'redux/cars/carsSelectors';

// const photoTrial =
//   'C:UsersKaterina ZykovaDesktopGitHubcar-rental-appsrcimgimage 1 (1).png';

export const CarsList = () => {
  // const dispatch = useDispatch();

  const visibleCars = useSelector(selectCars);

  console.log(visibleCars.length);

  return (
    <List>
      {visibleCars.map(car => (
        <ListItem key={car.id}>
          <img src={car.img} alt="" width="274"></img>
          <ContainerMakeAndPrice>
            <p>{`${car.make}, ${car.year}`}</p>
            <p>{car.rentalPrice}</p>
          </ContainerMakeAndPrice>
          <ContainerDescription>
            <p>{car.address}</p>
            <p>{car.rentalCompany}</p>
          </ContainerDescription>
          <ContainerDescription>
            <p>{car.type}</p>
            <p>{car.model}</p>
            <p>{car.id}</p>
            <p>{car.functionalities[0]}</p>
          </ContainerDescription>
          <Button>Learn more</Button>
        </ListItem>
      ))}
    </List>
  );
};
