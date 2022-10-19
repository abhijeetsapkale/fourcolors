import Head from 'next/head';
import Link from 'next/link';
import { Col, Row, Image, Button, Form, Input, Tabs } from 'antd';
import { useRouter } from 'next/router';

export default function Otp() {

  const router = useRouter();
  const onFinish = (e) => {
    e.preventDefault()
    router.push("/all-documents");
  };

  const plainOptions = ['Proposals', 'Quotes', 'Contracts', 'Forms', 'Notary', 'NDA'];

  const { TabPane } = Tabs;

  return (
    <>
      <Head>
        <title>Business Info</title>
        <meta name="description" content="OTP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Image src="/images/logo.svg" alt="Logo" height={26} width={118} preview={false} className="auth-logo" />


        <Row align="middle">
          <Col span={16}>
            <div className="auth-wrap">
              <ul className='custom-tab'>
                <li>
                  <a className='active'><span>1</span> Signup</a>
                </li>
                <li>
                  <Link href="/basic-info" >
                    <a className='active'><span>2</span> Basic Information</a>
                  </Link>
                </li>
                <li>
                  <Link href="/business-info" >
                    <a className='active'><span>3</span> Business</a>
                  </Link>
                </li>
              </ul>


              <h1 className="auth-header">
                Set Up your Business
              </h1>

              <Tabs defaultActiveKey="1" className='auth-tab'>
                <TabPane tab={
                  <>
                    <Image src="/images/business.svg" alt="Logo" height={16} width={16} preview={false} />{' '}
                    For Business
                  </>
                } 
                key="1">
                  <Form
                    name="basic"

                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Company name"
                      name="companyname"
                    >
                      <Input size="large" placeholder="John Doe PVT. LTD" />
                    </Form.Item>

                    <Form.Item
                      label="Website"
                      name="website"
                    >
                      <Input size="large" placeholder="www.elasticsign.com" />
                    </Form.Item>

                    <Form.Item
                      label="TAX ID/ GST number"
                      name="gstnumber"
                    >
                      <Input size="large" placeholder="e.g. 22AAAA0000A1Z5" />
                    </Form.Item>

                    <Form.Item
                      label="Vanity URL"
                      name="url"
                    >
                      <Row align='middle' gutter={8}>
                        <Col span={17}>
                          <Input size="large" placeholder="company" />
                        </Col>
                        <Col span={7}>
                          <p className='mb-0'>.elasticsign.com</p>
                        </Col>

                      </Row>


                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane tab={
                   <>
                      <Image src="/images/individual.svg" alt="Logo" height={16} width={16} preview={false} />{' '}
                      For Business
                  </>
                  
                } key="2">
                  <Form
                    name="basic"

                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                  >
                    
                    <Form.Item
                      label="Vanity URL"
                      name="url"
                    >
                      <Row align='middle' gutter={8}>
                        <Col span={17}>
                          <Input size="large" placeholder="company" />
                        </Col>
                        <Col span={7}>
                          <p className='mb-0'>.elasticsign.com</p>
                        </Col>

                      </Row>


                    </Form.Item>

                  </Form>
                </TabPane>
              </Tabs>
              <Form
                name="basic"

                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                

                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large" onClick={onFinish}>
                    Let’s get started
                  </Button>
                </Form.Item>
              </Form>




            </div>
          </Col>
          <Col span={8} className="signupbg">
            <h2 className='auth-banner-text'>Transforming<br />traditional ways<br /> into Digital</h2>
          </Col>
        </Row>

      </main>
    </>
  )
}
