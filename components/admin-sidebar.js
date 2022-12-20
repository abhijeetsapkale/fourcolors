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
          <li className={router.pathname == "/admin-center/translation-profile" ? "active" : ""}>
            <Link href="/admin-center/translation-profile">
              <a>
                <Image src="/images/sidebar/translation-profile-green.svg" alt="translation-profile"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/translation-profile.svg" alt="translation-profile" className="img-default" preview={false}/>
                <span>Translation Profile</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/admin-center/qc-profile" ? "active" : ""}>
            <Link href="/admin-center/qc-profile">
              <a>
                <Image src="/images/sidebar/qc-profile-green.svg" alt="qc-profile"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/qc-profile.svg" alt="qc-profile" className="img-default" preview={false}/>
                <span>QC Profile</span>
              </a>
            </Link>
          </li>
          <hr />
          <li className={router.pathname == "/admin-center/cad-processor" ? "active" : ""}>
            <Link href="/admin-center/cad-processor">
              <a>
                <Image src="/images/sidebar/cad-green.svg" alt="cad"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/cad.svg" alt="cad" className="img-default" preview={false}/>
                <span>CAD Processor</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/admin-center/satellite-server" ? "active" : ""}>
            <Link href="/admin-center/satellite-server">
              <a>
                  <Image src="/images/sidebar/server-green.svg" alt="server"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/server.svg" alt="server" className="img-default" preview={false}/>
                <span>Satellite Server</span>
              </a>
            </Link>
          </li>
          <hr />
          <li className={router.pathname == "/admin-center/users" ? "active" : ""}>
            <Link href="/admin-center/users">
              <a>
                <Image src="/images/sidebar/user-green.svg" alt="user"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/user.svg" alt="user" className="img-default" preview={false}/>
                <span>User</span>
              </a>
            </Link>
          </li>
          
          <li className={router.pathname == "/admin-center/roles-security" ? "active" : ""}>
            <Link href="/admin-center/roles-security">
              <a>
                  <Image src="/images/sidebar/security-green.svg" alt="security"  className="img-active" preview={false}/>
                  <Image src="/images/sidebar/security.svg" alt="security" className="img-default" preview={false}/>
                <span>Roles & Security</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/admin-center/groups" ? "active" : ""}>
            <Link href="/admin-center/groups">
              <a>
                <Image src="/images/sidebar/groups-green.svg" alt="groups"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/groups.svg" alt="groups" className="img-default" preview={false}/>
                <span>Groups</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/admin-center/company" ? "active" : ""}>
            <Link href="/admin-center/company">
              <a>
                <Image src="/images/sidebar/company-green.svg" alt="company"  className="img-active" preview={false}/>
                <Image src="/images/sidebar/company.svg" alt="company" className="img-default" preview={false}/>
                <span>Company</span>
              </a>
            </Link>
          </li>
          <hr />
         
        </ul>
   
        <div className='sidebarBottom'>
          <Row>
            <Col span={24}>
              <ul className="sidebar-list pb-10">
                <li>
                  <Link href="/jobs/all-jobs">
                    <a>
                      <Image src="/images/sidebar/all-jobs-green.svg" alt="all-jobs"  className="img-active" preview={false}/>
                      <Image src="/images/sidebar/all-jobs.svg" alt="all-jobs" className="img-default" preview={false}/>
                      <span>All Jobs</span>
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