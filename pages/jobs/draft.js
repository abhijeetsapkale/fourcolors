import Sidebar from '../../components/sidebar';
import SearchHeader from '../../components/search';
import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Space  } from 'antd';
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';

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

export default function Drafts({}) {

    const [columns, setColumns] = useState([
        {
            title: 'JOB DETAILS',
            dataIndex: 'jobdetail',
            key: 'jobdetail',
            render: jobdetail => {
                return <>
                    <h3>{jobdetail.jobId}</h3>
                    <p>{jobdetail.mainTitle}</p>
                    <p>{jobdetail.date}</p>
                </>
            },
            width: 250
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                if(status == "Unshared"){
                    return <span className='status orange'>{' '}{status}</span>
                }
               
            }, 
            width: 250,
            align:'center'
        },
        {
            title: 'RECEIVER / COMPANY',
            dataIndex: 'receiver',
            key: 'receiver',
            render: receiver => {
                return <p className='text-dark fw-500'>{receiver}</p>
            },
            width: 200
        },
        {
            title: 'INITIATOR / COMPANY',
            dataIndex: 'initiator',
            key: 'initiator',
            render: initiator => {
                return <p className='text-dark fw-500'>{initiator}</p>
            },
            width: 200
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
                        <Link href="edit-job"><a><Button className="btn-icon-round"><Image src="/images/eye.svg" alt="Logo" height={8} width={11} preview={false} /></Button></a></Link>
                    </Space>
                </>
            },
            width: 100
        },
    ]);

    const dataSource = [
        {
            key: '1',
            jobdetail: {
                jobId: '-',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Unshared',
            receiver: "NA",
            initiator: 'NA',
            action:''
        },
        {
            key: '2',
            jobdetail: {
                jobId: '-',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Unshared',
            receiver: "NA",
            initiator: 'NA',
            action:''
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

    return (
        <>
            <div className='main-layout'>
                <Sidebar></Sidebar>
                <div>
                    <header className='header'>
                        <h1>Drafts</h1>
                        <SearchHeader></SearchHeader>
                        <Space className="header-right">
                            <Button>
                                <Space align="center">
                                    <Image src="/images/export.svg" alt="export" height={11} width={10} preview={false} className="img-export"/> 
                                    <span>Export</span>
                                </Space>
                            </Button>
                        </Space>
                    </header>
                    <main className='main-pad'>
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
                        
                    </main>
                </div>
            </div>
        </>
    )
}