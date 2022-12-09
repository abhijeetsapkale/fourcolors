import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Space, Row, Col, Form, Input, Select } from 'antd';
import React, { useState } from 'react';
const { TextArea } = Input;

import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
export default function NewJob({ }) {


    return (
        <>
            <main className='new-job'>
                <section className='popup-header'>
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Space>
                                <Link href="/all-jobs">
                                    <a>
                                        <Image src="/images/back.svg" alt="Logo" height={12} width={6} preview={false} />
                                    </a>
                                </Link>
                                <h2>Create new Job</h2>
                            </Space>
                        </Col>
                        <Col>
                            <Space size={15}> 
                                <Button type='secondary'>Save As Draft</Button>
                                <Button type="primary">Send</Button>
                            </Space>
                        </Col>
                    </Row>
                </section>
                <section>
                    <div className='new-job-grid-wrap'>
                        <div className='new-job-left bg-grey'>
                            <Row className='mb-25'>
                                <Col span="24">
                                    <label className='label'>Job Title</label>
                                    <Input placeholder="Enter job title" size='large'/>
                                </Col>
                            </Row>
                            <Row className='mb-25'>
                                <Col span="24">
                                    <label className='label'>Receiver/Company</label>
                                    <Select
                                        showSearch="true"
                                        mode="multiple"
                                        className='custom-select'
                                        placeholder="Select Channel"
                                        size='large'
                                        options={[
                                            {
                                                value: '1',
                                                label: 'John doe / Four colors',
                                            },
                                            {
                                                value: '2',
                                                label: 'Tracey Brock / Umbrella corporation',
                                            },
                                            {
                                                value: '3',
                                                label: 'Daniel Payne / MNC Corporation',
                                            },
                                            {
                                                value: '4',
                                                label: 'Manuel Hunter / Octet Design Studio',
                                            },
                                            {
                                                value: '5',
                                                label: 'Raquel Steele / Four Colors',
                                            }
                                            ]}
                                        >
                                        </Select>
                                </Col>
                            </Row> 
                            <Row className='mb-25'>
                                <Col span="24">
                                    <label className='label'>Channel</label>
                                    <Select
                                    
                                        showSearch="true"
                                        
                                        className='custom-select'
                                        placeholder="Select Channel"
                                        size='large'
                                        options={[
                                            {
                                                value: 'OFTP2',
                                                label: 'OFTP2',
                                            },
                                            {
                                                value: 'HTTPS',
                                                label: 'HTTPS',
                                            }
                                            ]}
                                        >

                                        </Select>
                                </Col>
                            </Row> 
                            <Row className='mb-25'>
                                <Col span="24">
                                    <label className='label'>Program Manager</label>
                                    <Input placeholder="Enter program manager name" size='large'/>
                                </Col>
                            </Row> 
                            <Row className='mb-25'>
                                <Col span="24">
                                    <label className='label'>Description</label>
                                    <TextArea rows={4} placeholder="Enter a description..." size='large'/>
                                </Col>
                            </Row> 
                        </div>
                        <div className='new-job-right'>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <Image src="/images/files.svg" alt="Logo"  width={152} height={118} preview={false} />
                                </p>
                                <p className="ant-upload-text">Drag and drop file/folder or Browse</p>
                                <p className="ant-upload-hint">You can select file or folder from your PC or you can<br/> just drag and drop them</p>
                                <Button type='primary' className='mt-25' size='large'>
                                    <Space>
                                        <Image src="/images/upload.svg" alt="Logo"  width={18} height={15} preview={false} />
                                        Upload
                                    </Space>
                                </Button>
                            </Dragger>
                            <div className='upload-part-2'>
                                <Row justify="space-between" align="middle">
                                    <Col>Data</Col>
                                    <Col>
                                        <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
                                            <Button>+ Upload New Set</Button>
                                        </Upload>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}