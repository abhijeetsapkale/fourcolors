import Link from 'next/link'
import { Col, Row, Image, Menu, Progress, Button } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const items = [
    {
      label: 'Navigation One',
      key: 'all-documents',

    },
    {
      label: 'Navigation Two',
      key: 'draft',
    },
    {
      label: 'Navigation three',
      key: 'in-progress',
    }
  ];
  const router = useRouter();
  const [current, setCurrent] = useState("1");
  const onClick = (e) => {
    console.log('click ', e);
    if(window.location.pathname == '/'){
      setCurrent(e.key);
    }
    else if(window.location.pathname == '/draft'){
      setCurrent(e.key);
    }
  };
  return (
    <>
      <div className='main-layout'>
        
          <div className="main-sidebar">
            <Row align='middle' justify='space-between' className='sidebar-logo'>
              <Col>
                <Image src="/images/logo.svg" alt="Logo" height={33} width={120} preview={false} />
              </Col>
            </Row>


            <Menu onClick={onClick} mode="vertical"  selectedKeys={[current]} className="sidebar-list">

              <Menu.Item key="1">
                <Image src="/images/sidebar/all-jobs-green.svg" alt="All Jobs"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/all-jobs.svg" alt="All Jobs" className="img-default" preview={false}/>
                <span>All Jobs</span>
                <Link href="/"><a></a></Link>
              </Menu.Item>
              <Menu.Item key="2" >
                <Image src="/images/sidebar/draft-green.svg" alt="draft"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/draft.svg" alt="draft" className="img-default" preview={false}/>
                <span>Draft</span>
                <Link href="/draft"><a></a></Link>
              </Menu.Item>
              <Menu.Item key="3">

                <Image src="/images/sidebar/processing-green.svg" alt="processing"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/processing.svg" alt="processing" className="img-default" preview={false}/>
                <span>Processing</span>
                <Link href="/processing"><a></a></Link>

              </Menu.Item>
              <Menu.Item key="4">

              <Image src="/images/sidebar/sent-green.svg" alt="sent"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/sent.svg" alt="sent" className="img-default" preview={false}/>
                <span>Sent</span>
                <Link href="/sent"><a></a></Link>

              </Menu.Item>

              <Menu.Item key="5">

              <Image src="/images/sidebar/received-green.svg" alt="received"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/received.svg" alt="received" className="img-default" preview={false}/>
                <span>Received</span>
                <Link href="/received"><a></a></Link>
              </Menu.Item>
              <hr />
              <Menu.Item key="6">

              <Image src="/images/sidebar/completed-green.svg" alt="completed"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/completed.svg" alt="completed" className="img-default" preview={false}/>
                <span>Completed</span>
                <Link href="/completed"><a></a></Link>


              </Menu.Item>
              <Menu.Item key="7">

              <Image src="/images/sidebar/cancelled-green.svg" alt="cancelled"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/cancelled.svg" alt="cancelled" className="img-default" preview={false}/>
                <span>Cancelled</span>
                <Link href="/cancelled"><a></a></Link>

              </Menu.Item>

              <Menu.Item key="8">
              <Image src="/images/sidebar/archived-green.svg" alt="archived"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/archived.svg" alt="archived" className="img-default" preview={false}/>
                <span>Archived</span>
                <Link href="/archived"><a></a></Link>
              </Menu.Item>
              <hr />
              <Menu.Item key="9">
                <Image src="/images/sidebar/approvals-green.svg" alt="approvals"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/approvals.svg" alt="approvals" className="img-default" preview={false}/>
                <span>Approvals</span>
                <Link href="/approvals"><a></a></Link>
              </Menu.Item>
            </Menu>
            <div className='sidebarBottom'>
             
            <Row>
                <Col span={24}>
                  <Menu mode="inline" className="sidebar-list pb-10">
                    <Menu.Item key="10">
                      <Image src="/images/sidebar/settings-green.svg" alt="settings"  className="img-active" preview={false}/>
                      <Image src="/images/sidebar/settings.svg" alt="settings" className="img-default" preview={false}/>
                      <span>Admin Center</span>
                    </Menu.Item>
                  </Menu>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col span={24}>
                  <Menu mode="inline" className="sidebar-list pb-10">
                    <Menu.Item key="11">
                      <Image src="/images/sidebar/profile.png" alt="settings" preview={false}/>
                      <span>FourColors Admin</span>
                    </Menu.Item>
                  </Menu>
                </Col>
              </Row>
            </div>
          </div>
       
          <main>{children}</main>
       
      </div>
    </>
  )
}