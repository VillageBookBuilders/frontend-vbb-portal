import React, { useState } from 'react';
import { Select } from 'antd';

import { timeZoneList } from '../util/timeZones';

const timeZoneOptions = timeZoneList.map((tz) => ({ lable: tz, value: tz }));
/**
 *
 * A searchable Timezone selection component.
 *
 * NOTE: Any changes to this component should be minimal.
 * If you need to add additional functionality give the arguments defaults and
 * include them in the list below
 * @params handleSelect handles when the user selects a time zone. It is given the string representing the time zone selected i.e. 'America/New_York'
 * @params {obj of CSS styles } styles applied to the component
 * @returns Searchable Timezone selector Ant Design component
 */
export const SearchableTimeZoneSelection = ({ handleSelect, styles }) => {
  const [options, setOptions] = useState(timeZoneOptions);

  const onSearch = (searchText) => {
    const filteredOptions =
      options.filter((tzOption) =>
        tzOption.value.toLowerCase().includes(searchText.toLowerCase())
      ) ?? [];
    !!searchText ? setOptions(filteredOptions) : setOptions(timeZoneOptions);
  };

  return (
    <Select
      showSearch
      style={{ width: 200, ...styles }}
      placeholder="Select a time zone"
      onSearch={onSearch}
      options={options}
      onSelect={handleSelect}
    />
  );
};
