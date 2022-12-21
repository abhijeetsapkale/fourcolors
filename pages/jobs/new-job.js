import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Space, Row, Col, Form, Input, Select, message, Upload, Progress } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
const { TextArea } = Input;

const { Dragger } = Upload;



export default function NewJob({ }) {

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
    const [data, setData] = useState(fileList);
    const [showfilelist, setShowfilelist] = useState(false);
    const [loading, setLoading] = useState(false);

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        showUploadList: false,  

        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                setShowfilelist(true)
            }
            if (status == 'uploading') {
                setShowfilelist(true)
            }
            if (status === 'done') {
                setData(info.fileList);
                console.log(info.filenList);
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    };
    const router = useRouter();
   
    function send(){
        setLoading(true);
        setTimeout(() => {
            router.push('/jobs/all-jobs')
        }, 1000);
    };
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
                                <h2>Create new Job</h2>
                            </Space>
                        </Col>
                        <Col>
                            <Space size={15}>
                                <Button type='secondary'>Save As Draft</Button>
                                <Button type="primary" onClick={send}>Send</Button>
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
                                    <Input placeholder="Enter Job Title" size='large' />
                                </Col>
                            </Row>
                            <Row className='mb-25'>
                                <Col span="24">
                                    <label className='label'>Receiver/Company</label>
                                    <Select
                                        showSearch="true"
                                        mode="multiple"
                                        className='custom-select'
                                        placeholder="Select Recevier"
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
                                    <Input placeholder="Enter Program Manager Name" size='large' />
                                </Col>
                            </Row>
                            <Row className='mb-25'>
                                <Col span="24">
                                    <label className='label'>Description</label>
                                    <TextArea rows={4} placeholder="Enter a Description..." size='large' />
                                </Col>
                            </Row>
                        </div>
                        <div className='new-job-right'>
                            <div className={`upload-part-1 ${showfilelist ? "d-none" : "d-flex"}`}>
                                <Dragger {...props} listType="picture" defaultFileList={[...fileList]}>
                                    <div className="ant-upload-drag-icon">
                                        <Image src="/images/files.svg" alt="Logo" width={152} height={118} preview={false} />
                                    </div>
                                    <div className="ant-upload-text">Drag and drop file/folder or Browse</div>
                                    <div className="ant-upload-hint">You can select file or folder from your PC or you can<br /> just drag and drop them</div>
                                    <Button type='primary' className='mt-25' size='large'>
                                        <Space>
                                            <Image src="/images/upload.svg" alt="Logo" width={18} height={15} preview={false} />
                                            Upload
                                        </Space>
                                    </Button>
                                </Dragger>
                            </div>
                            <div className={`upload-part-2 ${showfilelist ? "d-block" : "d-none"}`}>
                                <Row justify="space-between" align="middle">
                                    <Col>Data</Col>
                                    <Col>
                                        <Upload {...props} listType="picture" defaultFileList={[...fileList]}>
                                            <Button type="outline-green">+ Upload New Set</Button>
                                        </Upload>
                                    </Col>
                                </Row>
                                <div className='card-border'>
                                        <div className='total-target'>
                                            <Row type="flex" justify="space-between">
                                                <Col span={6}>
                                                    <Space>
                                                        <span>9 Files</span>
                                                        <span>|</span>
                                                        <Upload {...props} listType="picture" defaultFileList={[...fileList]}>
                                                            <Button type="link">+ Add More</Button>
                                                        </Upload>
                                                    </Space>
                                                </Col>
                                                <Col span={6}>
                                                    <Select
                                                        showSearch="true"
                                                        className='custom-select'
                                                        placeholder="Select Target"
                                                        size='large'
                                                        options={[
                                                                {
                                                                    value: '1',
                                                                    label: 'Send Only (No Conversion)',
                                                                },
                                                                {
                                                                    value: '2',
                                                                    label: 'CATIA to STEP',
                                                                },
                                                                {
                                                                    value: '3',
                                                                    label: 'CATIA to IGES',
                                                                }
                                                            ]}
                                                        >
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </div>
                                        {fileList.map(function(data, k){
                                        return (
                                            <>
                                                <Row type="flex" align="middle" className='file-row outline' key={k.id}>
                                                    <Col span={16}>
                                                        <Space>
                                                            <Image src="/images/file.png" alt="file" height={24} width={17} preview={false} />
                                                            <div>
                                                                <h4>{data.name}</h4>
                                                                <h6>{data.size} GB</h6>
                                                            </div>
                                                        </Space>
                                                    </Col>
                                                    <Col span={8} className="text-right">
                                                        {data.percent == '100' ? <b>Completed</b> : <div className='status-percentage image-close'> <Progress percent={data.percent} showInfo={false}/><Image src="/images/close.svg" preview={false}/></div> }
                                                    </Col>
                                               </Row>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className='card-border mt-20'>
                                        <div className='total-target'>
                                            <Row type="flex" justify="space-between">
                                                <Col span={6}>
                                                    <Space>
                                                        <span>9 Files</span>
                                                        <span>|</span>
                                                        <Upload {...props} listType="picture" defaultFileList={[...fileList]}>
                                                            <Button type="link">+ Add More</Button>
                                                        </Upload>
                                                    </Space>
                                                </Col>
                                                <Col span={6}>
                                                    <Select
                                                        showSearch="true"
                                                        className='custom-select'
                                                        placeholder="Select Target"
                                                        size='large'
                                                        options={[
                                                                {
                                                                    value: '1',
                                                                    label: 'Send Only (No Conversion)',
                                                                },
                                                                {
                                                                    value: '2',
                                                                    label: 'CATIA to STEP',
                                                                },
                                                                {
                                                                    value: '3',
                                                                    label: 'CATIA to IGES',
                                                                }
                                                            ]}
                                                        >
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </div>
                                        {fileList.map(function(data, k){
                                        return (
                                            <>
                                                <Row type="flex" align="middle" className='file-row outline' key={k.id}>
                                                    <Col span={16}>
                                                        <Space>
                                                            <Image src="/images/file.png" alt="file" height={24} width={17} preview={false} />
                                                            <div>
                                                                <h4>{data.name}</h4>
                                                                <h6>{data.size} GB</h6>
                                                            </div>
                                                        </Space>
                                                    </Col>
                                                    <Col span={8} className="text-right">
                                                        {data.percent == '100' ? <b>Completed</b> : <div className='status-percentage image-close'> <Progress percent={data.percent} showInfo={false}/><Image src="/images/close.svg" preview={false}/></div> }
                                                    </Col>
                                               </Row>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className={`file-loading ${loading ? "d-flex" : "d-none"}`}>
                <Image src="/images/loader.gif"  preview={false}/>
            </div>
        </>
    )
}