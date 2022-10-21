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
        <ul className="sidebar-list">
          <li>
            <Link href="/">
              <a>
                <Image src="/images/sidebar/all-jobs-green.svg" alt="All Jobs"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/all-jobs.svg" alt="All Jobs" className="img-default" preview={false}/>
                <span>All Jobs</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/draft">
              <a>
                <Image src="/images/sidebar/draft-green.svg" alt="draft"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/draft.svg" alt="draft" className="img-default" preview={false}/>
                <span>Draft</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/processing">
              <a>
                <Image src="/images/sidebar/processing-green.svg" alt="processing"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/processing.svg" alt="processing" className="img-default" preview={false}/>
                <span>Processing</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/sent">
              <a>
                  <Image src="/images/sidebar/sent-green.svg" alt="sent"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/sent.svg" alt="sent" className="img-default" preview={false}/>
                <span>Sent</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/received">
              <a>
                <Image src="/images/sidebar/received-green.svg" alt="received"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/received.svg" alt="received" className="img-default" preview={false}/>
                <span>Received</span>
              </a>
            </Link>
          </li>
          <hr />
        </ul>
   
        <div className='sidebarBottom'>
          
       
          <hr />
         
        </div>
      </div>
    </>
  )
}