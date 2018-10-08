import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  type, onChange, standardOption, options
}) => (
  <select
    className={`
      select-box
      select-box--${type ? `${type}` : 'default'}
    `}
    onChange={onChange}
    type="select"
  >
    {standardOption.length && <option value=""> {standardOption} </option>}
    {options.map(({ name, id }) => (
      <option value={id} key={id}>
        {name}
      </option>
    ))}
  </select>
);

SelectBox.defaultProps = {
  type: '',
  standardOption: ''
};

SelectBox.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  standardOption: PropTypes.string
};

export default SelectBox;
