import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from '../../shared/components/select-box/SelectBox';

import './page-header.scss';

const PageHeader = ({
  title, subtitle, onChangeActiveFilter, standardOption, options
}) => (
  <section className="page-header">
    <div className="page-header__titles-wrapper">
      <p className="page-header__title">
        {title}
      </p>
      <p className="page-header__subtitle">
        {subtitle}
      </p>
    </div>
    <div className="page-header__select-search-wrapper">
      <SelectBox
        type="sort"
        onChange={(event) => onChangeActiveFilter(event.target.value)}
        options={options}
        standardOption={standardOption}
      />
      <input
        className="page-header__search"
        placeholder="Search"
        type="text"
      />
    </div>
  </section>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  standardOption: PropTypes.string.isRequired,
  onChangeActiveFilter: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PageHeader;
