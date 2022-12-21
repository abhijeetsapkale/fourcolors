import Sidebar from '../../components/admin-sidebar';
import SearchHeader from '../../components/search';
import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Space, Drawer, Row, Col, Input, Select, Radio } from 'antd';
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
const { TextArea } = Input;


const ResizableTitle = (props) => {
    const { onResize, width, ...restProps } = props;
    if (!width) {
        return <th {...restProps} />;
    }
    
    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
            }
            onResize={onResize}
            draggableOpts={{
                enableUserSelectHack: false,
            }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

export default function Users({ }) {
    
    const [columns, setColumns] = useState([
        {
            title: 'USER DETAILS',
            dataIndex: 'userDetail',
            key: 'userDetail',
            render: userDetail => {
                return <>
                    <h3>{userDetail.mainTitle}</h3>
                    <p>{userDetail.id} | {userDetail.email}</p>
                </>
            },
            width: 150
        },
        {
            title: 'COMPANY',
            dataIndex: 'company',
            key: 'company',
            render: company => {
                return <>
                    <p>{company}</p>
                </>
            },
            width: 250
        },
        {
            title: 'ROLE',
            dataIndex: 'role',
            key: 'role',
            render: role => {
                return <>
                    <p>{role}</p>
                </>
            },
            width: 100
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                if (status == "Active") {
                    return <span className='status light-green'>{' '}{status}</span>
                }
                else if (status == "Draft") {
                    return <span className='status light-purple'>{' '}{status}</span>
                }
                
            },
            width: 100,
            align: 'center'
        },
        
        {
            title: 'ACTION',
            dataIndex: 'action',
            key: 'action',
            render: status => {
                return <>
                    <Space>
                        <Dropdown overlay={menu} trigger={['click']} className="btn-icon-round" placement="bottomRight">
                            <Button className="btn-icon-round">
                                <Image src="/images/dot.svg" alt="Logo" height={4} width={14} preview={false} />
                            </Button>
                        </Dropdown>
                        <Button className="btn-icon-round" onClick={show2}><Image src="/images/eye.svg" alt="Logo" height={11} width={11} preview={false} /></Button>
                    </Space>
                </>
            },
            width: 100,
            align: 'right'
        },
    ]);

    const dataSource = [
        {
            key: '1',
            userDetail: {
                mainTitle: 'Sahithi Saragadm',
                id: '100001',
                email: 'Sahithi.saragadam@fourcolorstech.com'
            },
            company: 'External Company 1',
            role: 'External User',
            status: 'Active',
            action: ''
        }
    ];
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <Link href="/">
                            <a>
                                1st menu item
                            </a>
                        </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link href="/">
                            <a>
                                2nd menu item
                            </a>
                        </Link>
                    )
                },
                {
                    key: '3',
                    label: (
                        <Link href="/">
                            <a>
                                3rd menu item
                            </a>
                        </Link>
                    )
                }
            ]}
        />
    );
    const handleResize =
        (index) =>
            (_, { size }) => {
                const newColumns = [...columns];
                newColumns[index] = {
                    ...newColumns[index],
                    width: size.width,
                };
                setColumns(newColumns);
            };
    const mergeColumns = columns.map((col, index) => ({
        ...col,
        onHeaderCell: (column) => ({
            width: column.width,
            onResize: handleResize(index),
        }),
    }));
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
    return (
        <>
            <div className='main-layout'>
                <Sidebar></Sidebar>
                <div>
                    <header className='header'>
                        <h1>Company Management</h1>
                        <SearchHeader></SearchHeader>
                        <Space className="header-right">
                            <Button>
                                <Space align="center">
                                    <Image src="/images/export.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                    <span>Export</span>
                                </Space>
                            </Button>
                            <Button type="primary" onClick={show1}>Create New</Button>
                            <Drawer title="Create New Group" placement="right" onClose={onClose1} open={open1} width={540} className="custom-drawer">
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
                                                <label className='label'>Is Host Company?</label>
                                                <Radio.Group>
                                                    <Radio value={1}>Yes</Radio>
                                                    <Radio value={2}>No</Radio>
                                                </Radio.Group>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Mandatory Profile</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Profile 1',
                                                            label: 'Profile 1',
                                                        },
                                                        {
                                                            value: 'Profile 2',
                                                            label: 'Profile 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Default Channel</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Channel 1',
                                                            label: 'Channel 1',
                                                        },
                                                        {
                                                            value: 'Channel 2',
                                                            label: 'Channel 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Packaging Format</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Format 1',
                                                            label: 'Format 1',
                                                        },
                                                        {
                                                            value: 'Format 2',
                                                            label: 'Format 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Primary Contact</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Contact 1',
                                                            label: 'Contact 1',
                                                        },
                                                        {
                                                            value: 'Contact 2',
                                                            label: 'Contact 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Coding Partner Name</label>
                                                <Input placeholder="Enter coding partner name" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Assigned Partner Group</label>
                                                <Input placeholder="Enter assigned partner group name" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Address Line 1</label>
                                                <Input placeholder="Enter your address" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Address Line 2</label>
                                                <Input placeholder="Enter your address" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Location</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'location 1',
                                                            label: 'location 1',
                                                        },
                                                        {
                                                            value: 'location 2',
                                                            label: 'location 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>       
                                        <Row className='mb-25' gutter={20}>
                                            <Col span="12">
                                                <label className='label'>City</label>
                                                <Input placeholder="Enter your city" size='large' />
                                            </Col>
                                            <Col span="12">
                                                <label className='label'>Country</label>
                                                <Input placeholder="Enter your country" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25' gutter={20}>
                                            <Col span="12">
                                                <label className='label'>Zip Code</label>
                                                <Input placeholder="Enter your zip code" size='large' />
                                            </Col>
                                            <Col span="12">
                                                <label className='label'>SSID</label>
                                                <Input placeholder="Enter SSID" size='large' />
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
                        {/* <Table dataSource={dataSource} columns={columns}  pagination= { 
                                {pageSizeOptions: ['2', '4', '6'], showSizeChanger: true, }
                            }  className="table-1"/> */}

                        <Table
                            components={{
                                header: {
                                    cell: ResizableTitle,
                                },
                            }}
                            pagination= { 
                                {pageSizeOptions: ['2', '4', '6'], showSizeChanger: true, }}
                            columns={mergeColumns}
                            dataSource={dataSource}
                            className="table-1"
                        />
                        {/* <ResizableAntdTable columns={columns} dataSource={dataSource}  pagination= { 
                                    {pageSizeOptions: ['2', '4', '6'], showSizeChanger: true, }
                                }  className="table-1"/> */}

                            <Drawer title="Company Details" placement="right" onClose={onClose2} open={open2} width={480} className="custom-drawer">
                                <div className='drawer-detail-wrap'>
                                    <Row>
                                        <Col span="24">
                                            <h5>User Name</h5>
                                            <h4>NX HQM 1</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Is Host Company</h5>
                                            <h4>Yes</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Primary Contact</h5>
                                            <h4>Dx dba</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Default Channel</h5>
                                            <h4>HTTPS</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Packaging Format</h5>
                                            <h4>Zip</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>City</h5>
                                            <h4>Pune</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Country</h5>
                                            <h4>India</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Status</h5>
                                            <h4><span class="status light-green"> Active</span></h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Location</h5>
                                            <h4>Not Applicable</h4>
                                        </Col>
                                    </Row>
                                </div>
                            </Drawer>
                    </main>
                </div>
            </div>
        </>

    );
};

