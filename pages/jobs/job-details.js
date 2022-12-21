import Link from 'next/link';
import { Progress, Divider, Image, Space, Row, Col, Form, Input, Select, message, Upload } from 'antd';
import React, { useState } from 'react';
const { TextArea } = Input;

const { Dragger } = Upload;



export default function JobDetails({ }) {
    const fileList = [
        {

            uid: '0',
            name: 'Largefile_V1.catia',
            status: 'Uploaded',
            size: 43.57,
            percent: 100,
        },
        {

            uid: '-1',
            name: 'file_V2.catia',
            status: 'Uploading',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'images/file.png',
            size: 40.57,
            percent: 30,
        },
        {
            uid: '-2',
            name: 'Largefile_V1.catia',
            status: 'Pending',
            thumbUrl: 'images/file.png',
            size: 43,
            percent: 0,
        },
    ];

    return (
        <>
            <main className='new-job'>
                <section className='popup-header'>
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Space>
                                <Link href="/jobs/all-jobs">
                                    <a>
                                        <Image src="/images/back.svg" alt="Logo" height={12} width={6} preview={false} />
                                    </a>
                                </Link>
                                <h2>Job  Details</h2>
                            </Space>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </section>
                <section>
                    <div className='new-job-grid-wrap'>
                        <div className='bg-grey job-detail-left'>
                            <Row>
                                <Col span="12">
                                    <h5>Job ID</h5>
                                    <h4>#JOB0000941817</h4>
                                </Col>
                                <Col span="12">
                                    <h5>Created On</h5>
                                    <h4>Sep 22nd, 2022 at 07:55 PM</h4>
                                </Col>
                            </Row>
                            <Row className='mt-25'>
                                <Col span="24">
                                    <h5>Job Title</h5>
                                    <h3>TC job Document Item</h3>
                                </Col>
                            </Row>
                            <Row className='mt-25'>
                                <Col span="24">
                                    <h5>Initiator</h5>
                                    <ul>
                                        <li>
                                            <p>John doe</p>
                                            <span>Four colors</span>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row className='mt-25'>
                                <Col span="24">
                                    <h5>Receiver</h5>
                                    <ul>
                                        <li>
                                            <p>John doe</p>
                                            <span>Four colors</span>
                                        </li>
                                        <li>
                                            <p>John doe</p>
                                            <span>Four colors</span>
                                        </li>
                                        <li>
                                            <p>John doe</p>
                                            <span>Four colors</span>
                                        </li>
                                        <li>
                                            <p>John doe</p>
                                            <span>Four colors</span>
                                        </li>
                                        <li>
                                            <p>John doe</p>
                                            <span>Four colors</span>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row className='mt-25'>
                                <Col span="12">
                                    <h5>Program Manager</h5>
                                    <h4>John Doe</h4>
                                </Col>
                                <Col span="12">
                                    <h5>Channel</h5>
                                    <h4>HTTPS</h4>
                                </Col>
                            </Row>
                            <Row className='mt-25'>
                                <Col span="24">
                                    <h5>Job Description</h5>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                </Col>
                            </Row>
                        </div>
                        <div className='job-detail-right'>
                            <Row type="flex" justify="space-between" align="middle" className='mb-25'>
                                <Col>
                                    <h3 className='detail-main-title'>File Details (5)</h3>
                                </Col>
                                <Col>
                                    <span class="status dark-purple"> Processing</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="24">
                                    <Space className='conversion-title' size={15}>
                                        <span>CATIA</span>
                                            <Image src="/images/arrow-right.svg" alt="Logo" height={22} width={22} preview={false} />
                                        <span>STEP</span>
                                    </Space>
                                </Col>
                                <Col span="24">
                                
                                    {fileList.map(function(data, k){
                                        
                                        return (
                                            <>
                                               <Row type="flex" align="middle" className='file-row' key={k.id}>
                                                    <Col span={16}>
                                                        <Space>
                                                            <Image src="/images/pdffile.svg" alt="file" height={33} width={32} preview={false} />
                                                            <div>
                                                                <h4>{data.name}</h4>
                                                                <h6>{data.size} GB</h6>
                                                            </div>
                                                        </Space>
                                                    </Col>
                                                    <Col span={8} className="text-right">
                                                        {data.percent == '100' ? <b>Completed</b> : <div className='status-percentage'> <Progress percent={data.percent} showInfo={false}/> <div className='status-text'>{data.status}</div><div className='percentage-text'>{data.percent}%</div></div> }
                                                    </Col>
                                               </Row>
                                            </>
                                        )
                                    })}
                                    
                                </Col>
                                <Col span="24">
                                    <Divider />
                                </Col>
                            </Row>
                            <Row type="flex" justify="space-between" align="middle">
                                <Col span="24">
                                    <Space className='conversion-title' size={15}>
                                        <span>CATIA</span>
                                            <Image src="/images/arrow-right.svg" alt="Logo" height={22} width={22} preview={false} />
                                        <span>STEP</span>
                                    </Space>
                                </Col>
                                <Col span="24">
                                
                                    {fileList.map(function(data, k){
                                        return (
                                            <>
                                               <Row type="flex" align="middle" className='file-row' key={k.id}>
                                                    <Col span={16}>
                                                        <Space>
                                                            <Image src="/images/pdffile.svg" alt="file" height={33} width={32} preview={false} />
                                                            <div>
                                                                <h4>{data.name}</h4>
                                                                <h6>{data.size} GB</h6>
                                                            </div>
                                                        </Space>
                                                    </Col>
                                                    <Col span={8} className="text-right">
                                                        {data.percent == '100' ? <b>Completed</b> : <div className='status-percentage'> <Progress percent={data.percent} showInfo={false}/> <div className='status-text'>{data.status}</div><div className='percentage-text'>{data.percent}%</div></div> }
                                                    </Col>
                                               </Row>
                                            </>
                                        )
                                    })}
                                    
                                </Col>
                                <Col span="24">
                                    <Divider />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}