import Sidebar from '../../components/admin-sidebar';
import SearchHeader from '../../components/search';
import Link from 'next/link';
import { Divider, Button, Dropdown, Menu, Image, Space, Drawer, Row, Col, Input, Select, Modal, Tooltip } from 'antd';
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
const { TextArea } = Input;



export default function CadProcessor({ }) {
    // drawer1
    const [open1, setOpen1] = useState(false);
    const show1 = () => {
        setOpen1(true);
    };
    const onClose1 = () => {
        setOpen1(false);
    };
    // drawer2
    const [open2, setOpen2] = useState(false);
    const show2 = () => {
        setOpen2(true);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    // menu
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <Link href="/"><a><Image src='/images/edit.svg' width={12} height={12}/> Edit</a></Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link href="/"><a><Image src='/images/delete.svg' width={12} height={12}/> Delete</a></Link>
                    )
                },
                {
                    key: '3',
                    label: (
                        <Link href="/"><a><Image src='/images/active.svg' width={12} height={12}/> Active</a></Link>
                    )
                },
                {
                    key: '4',
                    label: (
                        <Link href="/"><a><Image src='/images/deactive.svg' width={12} height={12}/> Deactive</a></Link>
                    )
                }
            ]}
        />
    );
    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='main-layout'>
                <Sidebar></Sidebar>
                <div>
                    <header className='header'>
                        <h1>CAD Processor</h1>
                        <SearchHeader></SearchHeader>
                        <Space className="header-right">
                            <Button>
                                <Space align="center">
                                    <Image src="/images/export.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                    <span>Export</span>
                                </Space>
                            </Button>
                            <Button type="primary" onClick={show1}>Create New</Button>
                            <Drawer title="Create new CAD Processor" placement="right" onClose={onClose1} open={open1} width={540} className="custom-drawer">
                                <div className='form-wrap'>
                                    <div className='form-div'>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Name</label>
                                                <Input placeholder="Enter your name" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Server IP</label>
                                                <Input placeholder="Enter server IP" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Location</label>
                                                <Select
                                                suffixIcon={<Image src='/images/down.svg'></Image>}
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Location 1',
                                                            label: 'Location 1',
                                                        },
                                                        {
                                                            value: 'Location 2',
                                                            label: 'Location 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Description</label>
                                                <TextArea rows={2} placeholder="Enter a Description..." size='large' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='form-footer'>
                                        <Space>
                                            <Button>Cancel</Button>
                                            <Button type="primary">Create</Button>
                                        </Space>
                                    </div>
                                </div>
                            </Drawer>
                        </Space>
                    </header>
                    <main className='main-pad'>
                        <div className='card-grid'>
                            <div className='card-wrap'>
                                <Modal title="CAD processor Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered footer={null}>
                                <div className='modal-detail-wrap'>
                                    <Row>
                                        <Col span="24">
                                            
                                                <h5>Name</h5>
                                            <h3>NX HQM 1</h3>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Availability</h5>
                                            <h4>CATIA</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Location</h5>
                                            <h4>San Francisco, California</h4>
                                        </Col>
                                    </Row>
                                    
                                    <Row className='mt-25'>
                                        <Col span="24">
                                            <h5>Status</h5>
                                            <h4><span class="status light-green"> Active</span></h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="24">
                                            <h5>Description</h5>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                        </Col>
                                    </Row>
                                </div>
                                </Modal>
                                <Row>
                                    <Col span="24">
                                        <Tooltip title="Name" placement="bottom" color="#242A41"><h3>NX  HQM 1</h3></Tooltip>
                                        <Tooltip title="Location" placement="bottom" color="#242A41">
                                            <Space>
                                                <Image src="/images/map.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                                <h5 className='mb-0'>San Francisco, California</h5>
                                            </Space>
                                        </Tooltip>
                                        <Divider className='my-10'/>
                                        <h4>CATIA</h4>
                                        <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-between" align="middle" className='mt-10'>
                                    <Col>
                                        <span class="status light-green" onClick={showModal}> Active</span>
                                    </Col>
                                    <Col>
                                        <Dropdown overlay={menu} trigger={['click']} placement="topRight">
                                            <div className="btn-icon-dot">
                                                <Image src="/images/dot.svg" alt="Logo" height={4} width={14} preview={false} />
                                            </div>
                                        </Dropdown>            
                                    </Col>
                                </Row>
                            </div>
                            <div className='card-wrap'>
                                <Row>
                                    <Col span="24">
                                        <Tooltip title="Name" placement="bottom" color="#242A41"><h3>NX  HQM 1</h3></Tooltip>
                                        <Tooltip title="Location" placement="bottom" color="#242A41">
                                            <Space>
                                                <Image src="/images/map.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                                <h5 className='mb-0'>San Francisco, California</h5>
                                            </Space>
                                        </Tooltip>
                                        <Divider className='my-10'/>
                                        <h4>CATIA</h4>
                                        <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-between" align="middle" className='mt-10'>
                                    <Col>
                                        <span class="status light-green" onClick={showModal}> Active</span>
                                    </Col>
                                    <Col>
                                        <Dropdown overlay={menu} trigger={['click']} placement="topRight">
                                            <div className="btn-icon-dot">
                                                <Image src="/images/dot.svg" alt="Logo" height={4} width={14} preview={false} />
                                            </div>
                                        </Dropdown>            
                                    </Col>
                                </Row>
                            </div>
                            <div className='card-wrap'>
                                <Row>
                                    <Col span="24">
                                        <h3>NX  HQM 1</h3>
                                        <Space>
                                            <Image src="/images/map.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                            <h5 className='mb-0'>San Francisco, California</h5>
                                        </Space>
                                        <Divider className='my-10'/>
                                        <h4>CATIA</h4>
                                        <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-between" align="middle" className='mt-10'>
                                    <Col>
                                        <span class="status red"> Inactive</span>
                                    </Col>
                                    <Col>
                                        <Dropdown overlay={menu} trigger={['click']} placement="topRight">
                                            <div className="btn-icon-dot">
                                                <Image src="/images/dot.svg" alt="Logo" height={4} width={14} preview={false} />
                                            </div>
                                        </Dropdown>            
                                    </Col>
                                </Row>
                            </div>
                            <div className='card-wrap'>
                                <Row>
                                    <Col span="24">
                                        <h3>NX  HQM 1</h3>
                                        <Space>
                                            <Image src="/images/map.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                            <h5 className='mb-0'>San Francisco, California</h5>
                                        </Space>
                                        <Divider className='my-10'/>
                                        <h4>CATIA</h4>
                                        <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-between" align="middle" className='mt-10'>
                                    <Col>
                                        <span class="status light-green"> Active</span>
                                    </Col>
                                    <Col>
                                        <Dropdown overlay={menu} trigger={['click']} placement="topRight">
                                            <div className="btn-icon-dot">
                                                <Image src="/images/dot.svg" alt="Logo" height={4} width={14} preview={false} />
                                            </div>
                                        </Dropdown>            
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>

    );
};

