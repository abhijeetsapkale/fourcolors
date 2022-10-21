import { Input, Select, AutoComplete } from 'antd';
import React, { useState } from 'react';
const { Option } = AutoComplete;

export default function Search() {

 
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
     


    </>
  )

}