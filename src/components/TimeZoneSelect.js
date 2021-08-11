import React, { useState } from 'react';
import { Select } from 'antd';
import { timeZoneList } from '../util/timeZones';

const timeZoneOptions = timeZoneList.map((tz) => ({ lable: tz, value: tz }));
/**
 *
 * A searchable Timezone selection component.
 *
 * NOTE: Any changes to this component should be minimal.
 * If you need to add additional functionality give the arguments defaults and include them in the list below
 * @params onSelect handles when the user selects a time zone
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
      onSelect={(e) => handleSelect(e)}
    />
  );
};

// Ant design Searchable Select
// <Select
// showSearch
// style={{ width: 200 }}
// placeholder="Select a person"
// optionFilterProp="children"
// onChange={onChange}
// onFocus={onFocus}
// onBlur={onBlur}
// onSearch={onSearch}
// filterOption={(input, option) =>
//   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
// }
// >
// <Option value="jack">Jack</Option>
// <Option value="lucy">Lucy</Option>
// <Option value="tom">Tom</Option>
// </Select>
