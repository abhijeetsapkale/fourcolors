import { Col, Row, Image, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Sidebar(){
  const router = useRouter();

  return (
    <>
      <div className="main-sidebar">
        <Row align='middle' justify='space-between' className='sidebar-logo'>
          <Col>
            <Image src="/images/logo.svg" alt="Logo" height={39} width={139} preview={false} />
          </Col>
        </Row>
        <ul className="sidebar-list">
          <li className={router.pathname == "/all-jobs" ? "active" : ""}>
            <Link href="/all-jobs">
              <a>
                <Image src="/images/sidebar/all-jobs-green.svg" alt="All Jobs"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/all-jobs.svg" alt="All Jobs" className="img-default" preview={false}/>
                <span>All Jobs</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/draft" ? "active" : ""}>
            <Link href="/draft">
              <a>
                <Image src="/images/sidebar/draft-green.svg" alt="draft"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/draft.svg" alt="draft" className="img-default" preview={false}/>
                <span>Draft</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/processing" ? "active" : ""}>
            <Link href="/processing">
              <a>
                <Image src="/images/sidebar/processing-green.svg" alt="processing"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/processing.svg" alt="processing" className="img-default" preview={false}/>
                <span>Processing</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/sent" ? "active" : ""}>
            <Link href="/sent">
              <a>
                  <Image src="/images/sidebar/sent-green.svg" alt="sent"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/sent.svg" alt="sent" className="img-default" preview={false}/>
                <span>Sent</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/received" ? "active" : ""}>
            <Link href="/received">
              <a>
                <Image src="/images/sidebar/received-green.svg" alt="received"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/received.svg" alt="received" className="img-default" preview={false}/>
                <span>Received</span>
              </a>
            </Link>
          </li>
          <hr />
          <li className={router.pathname == "/completed" ? "active" : ""}>
            <Link href="/completed">
              <a>
                  <Image src="/images/sidebar/completed-green.svg" alt="completed"  className="img-active" preview={false}/>
                  <Image src="/images/sidebar/completed.svg" alt="completed" className="img-default" preview={false}/>
                <span>Completed</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/cancelled" ? "active" : ""}>
            <Link href="/cancelled">
              <a>
                <Image src="/images/sidebar/cancelled-green.svg" alt="cancelled"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/cancelled.svg" alt="cancelled" className="img-default" preview={false}/>
                <span>Cancelled</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/archived" ? "active" : ""}>
            <Link href="/archived">
              <a>
                <Image src="/images/sidebar/archived-green.svg" alt="archived"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/archived.svg" alt="archived" className="img-default" preview={false}/>
                <span>Archived</span>
              </a>
            </Link>
          </li>
          <hr />
          <li className={router.pathname == "/approvals" ? "active" : ""}>
            <Link href="/approvals">
              <a>
                <Image src="/images/sidebar/approvals-green.svg" alt="approvals"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/approvals.svg" alt="approvals" className="img-default" preview={false}/>
                <span>Approvals</span>
              </a>
            </Link>
          </li>
        </ul>
   
        <div className='sidebarBottom'>
          <Row>
            <Col span={24}>
              <ul className="sidebar-list pb-10">
                <li>
                  <Link href="/">
                    <a>
                      <Image src="/images/sidebar/settings-green.svg" alt="settings"  className="img-active" preview={false}/>
                      <Image src="/images/sidebar/settings.svg" alt="settings" className="img-default" preview={false}/>
                      <span>Admin Center</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col span={24}>
              <ul className="sidebar-list pb-10">
                <li>
                  <Link href="/">
                    <a>
                      <Image src="/images/sidebar/profile.png" alt="settings" preview={false}/>
                      <span>FourColors Admin</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}