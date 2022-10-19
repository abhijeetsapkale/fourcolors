import Head from 'next/head';
import Link from 'next/link';
import { Col, Row, Image, Button, Form, Input, Checkbox  } from 'antd';
import { useRouter } from 'next/router';

export default function Otp() {
  
  const router = useRouter();
  const onFinish = (e) =>{
    e.preventDefault()
    router.push("/business-info");
  };

  const plainOptions = ['Proposals', 'Quotes', 'Contracts', 'Forms', 'Notary', 'NDA'];

  return (
    <>
      <Head>
        <title>Basic Info</title>
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
                    <a><span>3</span> Business</a>
                  </Link>
                </li>
              </ul>
            

              <h1 className="auth-header">
                Tell us about you
              </h1>
              <Form
                name="basic"

                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Full Name"
                  name="fullname"
                >
                  <Input size="large" placeholder="Full Name" />
                </Form.Item>

                <Form.Item
                  label="Position/ Title"
                  name="position"
                >
                  <Input size="large" placeholder="e.g. Sales manager, HR manager" />
                </Form.Item>

                <Form.Item
                  label="Phone number"
                  name="phone"
                >
                  <Input size="large" placeholder="987 895 8542" />
                </Form.Item>
                
                <Form.Item
                  label="Intrests"
                  name="interests"
                >
                  <Checkbox.Group options={plainOptions} defaultValue={['Apple']} className="custom-ck"/>

                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" onClick={onFinish}>
                  Next
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
