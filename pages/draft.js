import Layout from '../components/layout';
import SearchHeader from '../components/search';
import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Space  } from 'antd';


export default function AllDocuments({  }) {

    const columns = [
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
            width: '25%'
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
            width: '25%',
            align:'center'
        },
        {
            title: 'RECEIVER / COMPANY',
            dataIndex: 'receiver',
            key: 'receiver',
            render: receiver => {
                return <p className='text-dark fw-500'>{receiver}</p>
            },
            width: '20%'
        },
        {
            title: 'INITIATOR / COMPANY',
            dataIndex: 'initiator',
            key: 'initiator',
            render: initiator => {
                return <p className='text-dark fw-500'>{initiator}</p>
            },
            width: '20%'
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
                        <Button className="btn-icon-round"><Image src="/images/eye.svg" alt="Logo" height={8} width={11} preview={false} /></Button>
                    </Space>
                </>
            },
            width: '10%'
        },
    ];

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
        

    return (
        <Layout>
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
                <Table dataSource={dataSource} columns={columns} pagination={false} className="table-1"/>
            </main>
        </Layout>
    )
}