import Link from 'next/link'
import { Col, Row, Image, Menu, Progress, Button } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Layout({ children }) {
  
  const router = useRouter();

  const [current, setCurrent] = useState("all-jobs");

  const onClick = (e) => {
    console.log('click ', e);

    setCurrent(e.key);
  };
  return (
    <>
    
    </>
  )
}