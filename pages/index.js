import { useRouter } from 'next/router';
import Link from 'next/link';
import {Form, Input, Button, Col, Row, Image, Checkbox, Space } from 'antd';




export default function Login({ }) {
    const router = useRouter();
    function goTOAllJobs() {
        router.push('/jobs/all-jobs');
    };
    return (
        <>
            <div className='auth-wrap'>
                <Image src="/images/logo-black.svg" alt="Logo" height={39} width={139} preview={false} rootClassName="auth-logo"/>
                <div className='login-wrap'>
                    <h1>Login</h1>
                    <h4>Please fill the below details to login your account.</h4>
                    <Form layout="vertical">
                        <Form.Item label="Email">
                            <Input placeholder="Enter your email-id" size='large'/>
                        </Form.Item>
                        <Form.Item label="Password">
                            <Input.Password placeholder="Enter password" size='large'/>
                        </Form.Item>
                        <Row justify="space-between" className='sub-link'>
                            <Col>
                                <Checkbox>Remember me</Checkbox>
                            </Col>
                            <Col>
                                <Link href="/">Forgot Password?</Link>
                            </Col>
                        </Row> 
                        <Button type="primary" block size="large" className='mt-20' onClick={goTOAllJobs}>Login</Button>
                        <div className='btn-look mt-20'>
                            FourColors training guide for External Users <a href='#'> (PDF)</a>
                        </div>
                        <div className='btn-look mt-20'>
                            FAQ - Frequently Asked Questions <a href='#'> (PDF)</a>
                        </div>
                        <div className='btn-look mt-20'>
                            For questions & login problems please send an email to <a href='#'>hello@fourcolorstech.com</a>
                        </div>
                    </Form>
                </div>
            </div> 
        </>

    );
};

