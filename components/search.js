import { Input, Select, AutoComplete } from 'antd';
import { useRouter } from 'next/router'
import React, { useState } from 'react';
const { Option } = AutoComplete;

export default function Search() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const router = useRouter();

 
  const [result, setResult] = useState([]);
  const handleSearch = (value) => {
    let res = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['lorem ipsum 1', 'lorem ipsum 2', 'lorem ipsum 3'].map((domain) => `${domain}`);
    }
    setResult(res);
  };


  return (
    <>
      <Input.Group compact className='custom-search-wrap'>
        <Select defaultValue="1" className='custom-list'>
          <option value="1">All</option>
          <option value="2">Job id</option>
          <option value="3">Job Title</option>
        </Select>
        <AutoComplete className='custom-search'
          style={{
            width: 200,
          }}
          onSearch={handleSearch}
          placeholder="Search"
        >
          {result.map((email) => (
            <Option key={email} value={email}>
              {email}
            </Option>
          ))}
        </AutoComplete>
      </Input.Group>


    </>
  )

}