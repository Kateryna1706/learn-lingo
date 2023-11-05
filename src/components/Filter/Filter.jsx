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
  Dropdown,
  DropdownItem,
  ContainerPosition,
  ButtonSearch,
} from './Filter.styled';
import { ReactComponent as ArrowDown } from '../Icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../Icons/arrow-up.svg';
import { useState } from 'react';
import { selectFilter } from 'redux/cars/carsSelectors';
import { getFilteredCars } from 'redux/cars/carsOperations';

const brandList = [
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

const getPriceList = () => {
  let price = [];
  for (let i = 20; i <= 500; i += 10) {
    price.push(i);
  }

  return price;
};

const priceList = getPriceList();

export const Filter = ({ page }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [visibleBrand, setVisibleBrand] = useState(false);
  const [visiblePrice, setVisiblePrice] = useState(false);
  const [brand, setBrand] = useState(
    filter.filterBrand ? filter.filterBrand : 'Enter the text'
  );
  const [price, setPrice] = useState(
    filter.filterPrice ? filter.filterPrice : 'To $'
  );

  const handleChangeBrand = event => {
    const value = event.target.innerHTML;
    setBrand(value);
  };

  const handleChangePrice = event => {
    const value = event.target.innerHTML;
    setPrice(value);
  };

  const handleFilterChange = () => {
    dispatch(getFilteredCars({ page, make: brand }));
    dispatch(changeFilter({ key: 'filterPrice', value: price }));
    dispatch(changeFilter({ key: 'filterBrand', value: brand }));
  };

  const handleClickDownBrand = () => {
    setVisibleBrand(true);
  };

  const handleClickUpBrand = () => {
    setVisibleBrand(false);
  };

  const handleClickDownPrice = () => {
    setVisiblePrice(true);
  };

  const handleClickUpPrice = () => {
    setVisiblePrice(false);
  };

  return (
    <Container>
      <ContainerPosition>
        <Label>
          <Text>Car brand</Text>
          <Brand
            type="text"
            name="filter"
            value={brand}
            onChange={handleChangeBrand}
          />
        </Label>
        {visibleBrand ? (
          <ArrowUp className="arrow" onClick={handleClickUpBrand} />
        ) : (
          <ArrowDown className="arrow" onClick={handleClickDownBrand} />
        )}
        {visibleBrand && (
          <Dropdown className="brand">
            {brandList.map((item, index) => (
              <DropdownItem key={index} onClick={handleChangeBrand}>
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </ContainerPosition>
      <ContainerPosition>
        <Label>
          <Text>Price/ 1 hour</Text>
          <Price
            type="text"
            name="filter"
            value={price}
            onChange={handleChangePrice}
          />
        </Label>
        {visiblePrice ? (
          <ArrowUp className="arrow price" onClick={handleClickUpPrice} />
        ) : (
          <ArrowDown className="arrow price" onClick={handleClickDownPrice} />
        )}
        {visiblePrice && (
          <Dropdown className="price">
            {priceList.map((item, index) => (
              <DropdownItem key={index} onClick={handleChangePrice}>
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </ContainerPosition>
      <Label>
        <Text>Сar mileage / km</Text>
        <СarMileage>
          <СarMileageItem
            type="text"
            name="filter"
            value={'From'}
            onChange={handleFilterChange}
          />
          <СarMileageItem
            type="text"
            name="filter"
            value={'To'}
            onChange={handleFilterChange}
          />
        </СarMileage>
      </Label>
      <ButtonSearch onClick={handleFilterChange}>Search</ButtonSearch>
    </Container>
  );
};
