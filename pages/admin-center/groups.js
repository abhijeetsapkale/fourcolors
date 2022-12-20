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

export default function AllDocuments({ }) {
    
    const [columns, setColumns] = useState([
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: name => {
                return <>
                    <h3>{name}</h3>
                </>
            },
            width: 150
        },
        {
            title: 'Users',
            dataIndex: 'users',
            key: 'users',
            render: users => {
                return  users.join(' , ');
            },
            width: 250
        },
        {
            title: 'Modification',
            dataIndex: 'modification',
            key: 'modification',
            render: modification => {
                return <>
                    <p>{modification.mainTitle}</p>
                    <p>{modification.date}</p>
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
            name: 'Lorem Ipsum',
            users: ['User A', 'User X', 'DX dba', 'User Y', 'Ashutosh Shekhar'],
            modification: {
                mainTitle: 'DX dba',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Active',
            action: ''
        },
        {
            key: '2',
            name: 'Lorem Ipsum',
            users: ['User A', 'User X', 'DX dba', 'User Y', 'Ashutosh Shekhar'],
            modification: {
                mainTitle: 'DX dba',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Active',
            action: ''
        },
        {
            key: '3',
            name: 'Lorem Ipsum',
            users: ['User A', 'User X', 'DX dba', 'User Y', 'Ashutosh Shekhar'],
            modification: {
                mainTitle: 'DX dba',
                date: '11 Apr, 2022; 05:57'
            },
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
                        <h1>Groups</h1>
                        <SearchHeader></SearchHeader>
                        <Space className="header-right">
                            <Button>
                                <Space align="center">
                                    <Image src="/images/export.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                    <span>Export</span>
                                </Space>
                            </Button>
                            <Button type="primary" onClick={show1}>Create New</Button>
                            <Drawer title="Create new Group" placement="right" onClose={onClose1} open={open1} width={540} className="custom-drawer">
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
                                                <label className='label'>User</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select users"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Users 1',
                                                            label: 'Users 1',
                                                        },
                                                        {
                                                            value: 'Users 2',
                                                            label: 'Users 2',
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
                                                <Checkbox>Is active</Checkbox>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Created By</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Created By 1',
                                                            label: 'Created By 1',
                                                        },
                                                        {
                                                            value: 'Created By 2',
                                                            label: 'Created By 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Created On</label>
                                                <DatePicker size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Last Modified By</label>
                                                <Select
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'Last Modified By 1',
                                                            label: 'Last Modified By 1',
                                                        },
                                                        {
                                                            value: 'Last Modified By 2',
                                                            label: 'Last Modified By 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Last Modified On</label>
                                                <DatePicker size='large' />
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

                            <Drawer title="Group Details" placement="right" onClose={onClose2} open={open2} width={480} className="custom-drawer">
                                <div className='drawer-detail-wrap'>
                                    <Row>
                                        <Col span="24">
                                            <h5>Name</h5>
                                            <h4>NX HQM 1</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="24">
                                            <h5>Users</h5>
                                            <ul>
                                                <li>
                                                    <p>DX dba</p>
                                                </li>
                                                <li>
                                                    <p>User A</p>
                                                </li>
                                                <li>
                                                    <p>User X</p>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Created By</h5>
                                            <h4>Lorem Ipsum</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Created On</h5>
                                            <h4>Lorem Ipsum</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Last Modified By</h5>
                                            <h4>Lorem Ipsum</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Last Modified On</h5>
                                            <h4>Lorem Ipsum</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>Owner</h5>
                                            <h4>Lorem Ipsum</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>Status</h5>
                                            <h4><span class="status light-green"> Active</span></h4>
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

