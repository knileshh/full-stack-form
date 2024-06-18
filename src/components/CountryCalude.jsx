import React, { useState } from 'react';
import Select from 'react-select';

const countryCodeOptions = [
  { value: '+93', label: 'Afghanistan (+93)' },
  { value: '+355', label: 'Albania (+355)' },
  // ... other country codes
];

const CountryCalude = () => {
  const [countryCode, setCountryCode] = useState('');

  const handleCountryCodeChange = (selectedOption) => {
    setCountryCode(selectedOption.value);
  };

  return (
    <div>
      <Select
        options={countryCodeOptions}
        value={countryCodeOptions.find((option) => option.value === countryCode)}
        onChange={handleCountryCodeChange}
      />
      {/* other form elements */}
    </div>
  );
};

export default CountryCalude;