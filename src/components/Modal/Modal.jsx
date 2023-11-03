import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import {
  Overlay,
  ModalWrap,
  ContainerMakeAndYear,
  ContainerDescription,
  Description,
  Accessories,
  List,
  Conditions,
  ListConditions,
  Text,
  Button,
} from './Modalstyled';
import { ReactComponent as Close } from '../Icons/close.svg';

export const Modal = ({ car, onClick }) => {
  const getMileage = value => {
    const array = value.toString().split('');
    array.splice(1, 0, ',');
    return array.join('');
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

  const handleClickClose = () => {
    onClick();
  };

  const handleClickRental = event => {
    console.log(event);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClick]);

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWrap>
        <Close className="close" onClick={handleClickClose} />
        <img src={car.img} alt="" width="274"></img>
        <ContainerMakeAndYear>{`${car.make}, ${car.year}`}</ContainerMakeAndYear>
        <ContainerDescription>
          <p>{car.address.split(',').slice(1, 2)}</p>
          <p>{car.address.split(',').slice(2)}</p>
          <p>Id: {car.id}</p>
          <p>Year: {car.year}</p>
          <p>Type: {car.type}</p>
        </ContainerDescription>
        <ContainerDescription>
          <p>Fuel Consumption: {car.fuelConsumption}</p>
          <p>Engine Size: {car.engineSize}</p>
        </ContainerDescription>
        <Description>{car.description}</Description>
        <Accessories>Accessories and functionalities:</Accessories>
        <List>
          {car.accessories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
        <List>
          {car.functionalities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
        <Conditions>Rental Conditions: </Conditions>
        <ListConditions>
          <li>
            {car.rentalConditions.slice(0, 13)}
            <Text>{car.rentalConditions.slice(13, 16)}</Text>
          </li>
          <li>{car.rentalConditions.slice(16, 39)}</li>
          <li>{car.rentalConditions.slice(39)}</li>
          <li>
            Mileage: <Text>{getMileage(car.mileage)}</Text>
          </li>
          <li>
            Price: <Text>{car.rentalPrice.slice(1)}$</Text>
          </li>
        </ListConditions>
        <Button onClick={handleClickRental}>Rental car</Button>
      </ModalWrap>
    </Overlay>
  );
};

// Modal.propTypes = {
//   largeImage: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
//   onClick: PropTypes.func.isRequired,
// };
