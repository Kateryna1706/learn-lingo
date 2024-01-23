import {
  ButtonReset,
  ContainerFilter,
  Dropdown,
  DropdownItem,
  Label,
  Text,
} from './Filter.styled';
import { getFilterPrice } from 'utils/getFilterPrice';
import { getLanguagesList } from 'utils/getLanguagesList';
import { getlevelList } from 'utils/getLevelList';
import { ReactComponent as ArrowDown } from '../Icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../Icons/arrow-up.svg';
import { useContext, useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { database } from 'firebase-config';
import { FilterContex } from 'context';

const Filter = ({ changeFilter, updateList }) => {
  const filter = useContext(FilterContex);
  const [teachers, setTeachers] = useState([]);

  const [visibleLanguages, setVisibleLanguages] = useState(false);
  const [visibleLevels, setVisibleLevels] = useState(false);
  const [visiblePrices, setVisiblePrices] = useState(false);

  const pricesList = getFilterPrice(teachers);
  const languagesList = getLanguagesList(teachers);
  const levelsList = getlevelList(teachers);

  const handleClickReset = () => {
    changeFilter(null);
    updateList();
  };

  const handleClickDropdownLanguages = () => {
    setVisibleLanguages(prevState => !prevState);
  };

  const handleClickDropdownLevels = () => {
    setVisibleLevels(prevState => !prevState);
  };

  const handleClickDropdownPrices = () => {
    setVisiblePrices(prevState => !prevState);
  };

  const handleClickFilterLanguage = event => {
    const newFilter = {
      firstFilter: filter ? false : true,
      filter: 'languages',
      value: event.target.innerHTML,
    };

    changeFilter(newFilter);

    setVisibleLanguages(false);
  };

  const handleClickFilterLevel = event => {
    const newFilter = {
      firstFilter: filter ? false : true,
      filter: 'levels',
      value: event.target.innerHTML,
    };

    changeFilter(newFilter);

    setVisibleLevels(false);
  };

  const handleClickFilterPrice = event => {
    const newFilter = {
      firstFilter: filter ? false : true,
      filter: 'price_per_hour',
      value: event.target.innerHTML,
    };

    changeFilter(newFilter);

    setVisiblePrices(false);
  };

  useEffect(
    () =>
      onValue(ref(database, 'teachers'), snapshot => {
        const list = snapshot.val();

        setTeachers(list);
      }),
    []
  );

  return (
    <ContainerFilter>
      <Label>
        <Text>Languages</Text>
        <input type="text" placeholder="French" className="languages" />
        {visibleLanguages ? (
          <ArrowUp onClick={handleClickDropdownLanguages} className="arrow" />
        ) : (
          <ArrowDown onClick={handleClickDropdownLanguages} className="arrow" />
        )}
        {visibleLanguages && (
          <Dropdown className="languages">
            {languagesList.map((item, index) => (
              <DropdownItem key={index} onClick={handleClickFilterLanguage}>
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </Label>
      <Label>
        <Text>Level of knowledge</Text>
        <input type="text" placeholder="A1 Beginner" className="levels" />
        {visibleLevels ? (
          <ArrowUp onClick={handleClickDropdownLevels} className="arrow" />
        ) : (
          <ArrowDown onClick={handleClickDropdownLevels} className="arrow" />
        )}
        {visibleLevels && (
          <Dropdown className="levels">
            {levelsList.map((item, index) => (
              <DropdownItem key={index} onClick={handleClickFilterLevel}>
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </Label>
      <Label>
        <Text>Price</Text>
        <input type="text" placeholder="30 $" className="prices" />
        {visiblePrices ? (
          <ArrowUp onClick={handleClickDropdownPrices} className="arrow" />
        ) : (
          <ArrowDown onClick={handleClickDropdownPrices} className="arrow" />
        )}
        {visiblePrices && (
          <Dropdown className="prices">
            {pricesList.map((item, index) => (
              <DropdownItem key={index} onClick={handleClickFilterPrice}>
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </Label>
      <ButtonReset onClick={handleClickReset}>Reset</ButtonReset>
    </ContainerFilter>
  );
};

export default Filter;
