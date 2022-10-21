import { Col, Row, Image, Menu } from 'antd';
import Link from 'next/link';

export default function Sidebar(){
  
  return (
    <>
      <div className="main-sidebar">
        <Row align='middle' justify='space-between' className='sidebar-logo'>
          <Col>
            <Image src="/images/logo.svg" alt="Logo" height={33} width={120} preview={false} />
          </Col>
        </Row>
        <ul>
          <li>
            <Link href="/" shallow={true}><a>All jobs</a></Link>
          </li>
          <li>
            <Link href="/draft" shallow={true}><a>Draft</a></Link>
          </li>
          <li>
            <Link href="/processing" shallow={true}><a>Processing</a></Link>
          </li>
        </ul>
   
        <div className='sidebarBottom'>
          
       
          <hr />
         
        </div>
      </div>
    </>
  )
}