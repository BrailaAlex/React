import React from 'react';
import PropTypes from 'prop-types';
import withDataLoader from './withDataLoader';

const City = ({ data }) => {
    const { name, temperature } = data;
    console.log(name)

    return (
        <div className="city">
            <span className="city__temperature">{`${temperature} F`}</span>
            <span className="city__name">{name}</span>
        </div>
    );
};

City.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
    }).isRequired,
};

const MyCity = withDataLoader(
  'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1', City);

export default MyCity;