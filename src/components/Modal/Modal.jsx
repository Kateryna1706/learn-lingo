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

export const Modal = ({ car, onClick }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClick();
    }
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
        <img src={car.img} alt="" width="274"></img>
        <ContainerMakeAndYear>{`${car.make}, ${car.year}`}</ContainerMakeAndYear>
        <ContainerDescription>
          <p>{car.address}</p>
          <p>{car.address}</p>
          <p>{car.id}</p>
          <p>{car.year}</p>
          <p>{car.type}</p>
        </ContainerDescription>
        <ContainerDescription>
          <p>{`Fuel Consumption: ${car.fuelConsumption}`}</p>
          <p>{`Engine Size: ${car.engineSize}`}</p>
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
          {car.rentalConditions.split(' ').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <li>
            Mileage:$<Text>{car.mileage}</Text>
          </li>
          <li>
            Price:<Text>{car.rentalPrice}</Text>
          </li>
        </ListConditions>
        <Button>Rental car</Button>
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
