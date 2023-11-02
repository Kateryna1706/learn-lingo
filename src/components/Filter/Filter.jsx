import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/cars/filterSlice';
import {
  Container,
  Brand,
  Label,
  Price,
  Text,
  СarMileage,
  СarMileageItem,
  DropdownBrand,
  DropdownBrandItem,
  ContainerPosition,
  ButtonSearch,
} from './Filter.styled';
import { ReactComponent as ArrowDown } from '../Icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../Icons/arrow-up.svg';
import { useState } from 'react';
import { selectFilter } from 'redux/cars/carsSelectors';

const brand = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

export const Filter = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    const value = event.target.innerHTML;
    console.log(value);
    dispatch(changeFilter(value));
  };

  const handleClickDown = () => {
    setVisible(true);
  };

  const handleClickUp = () => {
    setVisible(false);
  };

  return (
    <Container>
      <ContainerPosition>
        <Label>
          <Text>Car brand</Text>
          <Brand
            type="text"
            name="filter"
            value={filter ? filter : 'Enter the text'}
            // placeholder="Enter the text"
            onChange={handleFilterChange}
          />
        </Label>
        {visible ? (
          <ArrowUp className="arrow" onClick={handleClickUp} />
        ) : (
          <ArrowDown className="arrow" onClick={handleClickDown} />
        )}
        {visible && (
          <DropdownBrand>
            {brand.map((item, index) => (
              <DropdownBrandItem key={index} onClick={handleFilterChange}>
                {item}
              </DropdownBrandItem>
            ))}
          </DropdownBrand>
        )}
      </ContainerPosition>
      <Label>
        <Text>Price/ 1 hour</Text>
        <Price
          type="text"
          name="filter"
          value={'To $'}
          // placeholder="To $"
          onChange={handleFilterChange}
        />
      </Label>
      <Label>
        <Text>Сar mileage / km</Text>
        <СarMileage>
          <СarMileageItem
            type="text"
            name="filter"
            value={'From'}
            // placeholder="From"
            onChange={handleFilterChange}
          />
          <СarMileageItem
            type="text"
            name="filter"
            value={'To'}
            // placeholder="To"
            onChange={handleFilterChange}
          />
        </СarMileage>
      </Label>
      <ButtonSearch>Search</ButtonSearch>
    </Container>
  );
};
