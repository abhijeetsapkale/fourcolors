import Sidebar from '../components/sidebar';
import SearchHeader from '../components/search';
import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image,  Space} from 'antd';



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
                if(status == "Processing"){
                    return <span className='status dark-purple'>{' '}{status}</span>
                }
                else if(status == "Draft"){
                    return <span className='status light-purple'>{' '}{status}</span>
                }
                else if(status == "OFTP Ready"){
                    return <span className='status dark-green'>{' '}{status}</span>
                }
                else if(status == "Cancelled"){
                    return <span className='status red'>{' '}{status}</span>
                }
                else if(status == "Sent"){
                    return <span className='status blue'>{' '}{status}</span>
                }
                else if(status == "Received"){
                    return <span className='status light-green'>{' '}{status}</span>
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
                return receiver.map((rc) =>  <p className='text-dark fw-500'>{rc}</p>)
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
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Processing',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action:''
        },
        {
            key: '2',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Draft',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action:''
        },
        {
            key: '3',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'OFTP Ready',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action:''
        },
        {
            key: '4',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Cancelled',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action:''
        },
        {
            key: '5',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Sent',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action:''
        },
        {
            key: '6',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Received',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
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
        <>
            <div className='main-layout'>
                <Sidebar></Sidebar>
                <div>
                    <header className='header'>
                        <h1>All Jobs</h1>
                        <SearchHeader></SearchHeader>
                        <Space className="header-right">
                            <Button>
                                <Space align="center">
                                    <Image src="/images/export.svg" alt="export" height={11} width={10} preview={false} className="img-export"/> 
                                    <span>Export</span>
                                </Space>
                            </Button>
                            <Button type='primary'>New Job</Button>
                        </Space>
                    </header>
                    <main className='main-pad'>
                        <Table dataSource={dataSource} columns={columns}  pagination= { 
                            {pageSizeOptions: ['2', '4', '6'], showSizeChanger: true, }
                        }  className="table-1"/>
                        
                    </main>
                </div>
            </div>
        </>
    )
}