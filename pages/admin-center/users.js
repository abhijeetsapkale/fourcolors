import Sidebar from '../../components/admin-sidebar';
import SearchHeader from '../../components/search';
import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Space, Drawer, Row, Col, Input, Select, Checkbox, DatePicker } from 'antd';
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
                                <Image src="/images/dot.svg" alt="Logo" height={3} width={14} preview={false} />
                            </Button>
                        </Dropdown>
                        <Button className="btn-icon-round" onClick={show2}><Image src="/images/eye.svg" alt="Logo" height={8} width={11} preview={false} /></Button>
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
                        <h1>User Management</h1>
                        <SearchHeader></SearchHeader>
                        <Space className="header-right">
                            <Button>
                                <Space align="center">
                                    <Image src="/images/export.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                    <span>Export</span>
                                </Space>
                            </Button>
                            <Button type="primary" onClick={show1}>Create New</Button>
                            <Drawer title="Create New User" placement="right" onClose={onClose1} open={open1} width={540} className="custom-drawer">
                                <div className='form-wrap'>
                                    <div className='form-div'>
                                        
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Company</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select Company"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Company 1',
                                                            label: 'Company 1',
                                                        },
                                                        {
                                                            value: 'Company 2',
                                                            label: 'Company 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Email id</label>
                                                <Input placeholder="Enter your email" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Role</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select Role"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Role 1',
                                                            label: 'Role 1',
                                                        },
                                                        {
                                                            value: 'Role 2',
                                                            label: 'Role 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Status</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select Status"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Status 1',
                                                            label: 'Status 1',
                                                        },
                                                        {
                                                            value: 'Status 2',
                                                            label: 'Status 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Password</label>
                                                <Input placeholder="Enter password" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Location</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select Location"
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
                                                <label className='label'>First Name</label>
                                                <Input placeholder="Enter your first name" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Middle Name</label>
                                                <Input placeholder="Enter your Middle name" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Last Name</label>
                                                <Input placeholder="Enter your last name" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Department</label>
                                                <Input placeholder="Enter your department" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Designation</label>
                                                <Input placeholder="Enter your designation" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Phone</label>
                                                <Input placeholder="Enter your phone" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Email CC</label>
                                                <Input placeholder="Enter your CC email" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Security Question 1</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Question 1',
                                                            label: 'Question 1',
                                                        },
                                                        {
                                                            value: 'Question 2',
                                                            label: 'Question 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>   
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Security Answer 1</label>
                                                <Input placeholder="Enter answer" size='large' />
                                            </Col>
                                        </Row>  
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Security Question 2</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Question 1',
                                                            label: 'Question 1',
                                                        },
                                                        {
                                                            value: 'Question 2',
                                                            label: 'Question 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>   
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Security Answer 2</label>
                                                <Input placeholder="Enter answer" size='large' />
                                            </Col>
                                        </Row>   
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Security Question 3</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Question 1',
                                                            label: 'Question 1',
                                                        },
                                                        {
                                                            value: 'Question 2',
                                                            label: 'Question 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>   
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Security Answer 3</label>
                                                <Input placeholder="Enter answer" size='large' />
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

                            <Drawer title="User Details" placement="right" onClose={onClose2} open={open2} width={480} className="custom-drawer">
                                <div className='drawer-detail-wrap'>
                                    <Row>
                                        <Col span="12">
                                            <h5>User Name</h5>
                                            <h4>NX HQM 1</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>User Code</h5>
                                            <h4>100001</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="24">
                                            <h5>User ID</h5>
                                            <h4>Sahithi.saragadam@fourcolors.tech</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Company</h5>
                                            <h4>External Company 1</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Role</h5>
                                            <h4>External User</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="24">
                                            <h5>Email ID</h5>
                                            <h4>Sahithi.saragadam@fourcolors.tech</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Location</h5>
                                            <h4>Not Applicable</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Phone</h5>
                                            <h4>6302266158</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Location</h5>
                                            <h4>Not Applicable</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Phone</h5>
                                            <h4>6302266158</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Status</h5>
                                            <h4><span class="status light-green"> Active</span></h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Last Login</h5>
                                            <h4>11 Apr, 2022 at 05:57</h4>
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

