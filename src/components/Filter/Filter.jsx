import {
  ContainerFilter,
  Dropdown,
  DropdownItem,
  Label,
  Text,
} from './Filter.styled';
import teachers from '../../data/teachers.json';
import { getFilterPrice } from 'utils/getFilterPrice';
import { getLanguagesList } from 'utils/getLanguagesList';
import { getlevelList } from 'utils/getLevelList';
import { ReactComponent as ArrowDown } from '../Icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../Icons/arrow-up.svg';
import { useState } from 'react';

const Filter = () => {
  const [visibleLanguages, setVisibleLanguages] = useState(false);
  const [visibleLevels, setVisibleLevels] = useState(false);
  const [visiblePrices, setVisiblePrices] = useState(false);

  const pricesList = getFilterPrice(teachers);
  const languagesList = getLanguagesList(teachers);
  const levelsList = getlevelList(teachers);

  const handleClickLanguages = () => {
    setVisibleLanguages(prevState => !prevState);
  };

  const handleClickLevels = () => {
    setVisibleLevels(prevState => !prevState);
  };

  const handleClickPrices = () => {
    setVisiblePrices(prevState => !prevState);
  };

  return (
    <ContainerFilter>
      <Label>
        <Text>Languages</Text>
        <input type="text" placeholder="French" className="languages" />
        {visibleLanguages ? (
          <ArrowUp onClick={handleClickLanguages} className="arrow" />
        ) : (
          <ArrowDown onClick={handleClickLanguages} className="arrow" />
        )}
        {visibleLanguages && (
          <Dropdown className="languages">
            {languagesList.map((item, index) => (
              <DropdownItem key={index}>{item}</DropdownItem>
            ))}
          </Dropdown>
        )}
      </Label>
      <Label>
        <Text>Level of knowledge</Text>
        <input type="text" placeholder="A1 Beginner" className="levels" />
        {visibleLevels ? (
          <ArrowUp onClick={handleClickLevels} className="arrow" />
        ) : (
          <ArrowDown onClick={handleClickLevels} className="arrow" />
        )}
        {visibleLevels && (
          <Dropdown className="levels">
            {levelsList.map((item, index) => (
              <DropdownItem key={index}>{item}</DropdownItem>
            ))}
          </Dropdown>
        )}
      </Label>
      <Label>
        <Text>Price</Text>
        <input type="text" placeholder="30 $" className="prices" />
        {visiblePrices ? (
          <ArrowUp onClick={handleClickPrices} className="arrow" />
        ) : (
          <ArrowDown onClick={handleClickPrices} className="arrow" />
        )}
        {visiblePrices && (
          <Dropdown className="prices">
            {pricesList.map((item, index) => (
              <DropdownItem key={index}>{item}</DropdownItem>
            ))}
          </Dropdown>
        )}
      </Label>
    </ContainerFilter>
  );
};

export default Filter;
