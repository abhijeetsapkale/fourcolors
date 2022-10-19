import Layout from '../components/layout';
import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Row, Col, Input, Space  } from 'antd';
import { useRouter } from 'next/router'


export default function AllDocuments({  }) {

    const columns = [
        {
            title: 'Document',
            dataIndex: 'document',
            key: 'document',
            render: document => {
                return <>
                    <h3>{document.mainTitle}</h3>
                    <p>{document.subTitle}</p>
                </>
            },
            width: '50%'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                if(status == "Draft"){
                    return <p className='status grey'><span className='dot'></span>{' '}{status}</p>
                }
                else if(status == "Cancelled"){
                    return <p className='status red'><span className='dot'></span>{' '}{status}</p>
                }
                else if(status == "In Progress"){
                    return <p className='status yellow'><span className='dot'></span>{' '}{status}</p>
                }
                else if(status == "I need to sign"){
                    return <p className='status blue'><span className='dot'></span>{' '}{status}</p>
                }
                else if(status == "Completed"){
                    return <p className='status green'><span className='dot'></span>{' '}{status}</p>
                }
            }, 
            width: '18%'
        },
        {
            title: 'Last changes',
            dataIndex: 'changes',
            key: 'changes',
            render: changes => {
                return <p className='text-dark fw-500'>{changes}</p>
            },
            width: '17%'
        },
        {
            title: '',
            dataIndex: 'status',
            key: 'action',
            render: status => {
                if(status == "Draft"){
                    return <> 
                        <Button>Sign now</Button>
                        <Dropdown overlay={menu} trigger={['click']} className="btn-icon-round" placement="bottomRight">
                            <Image src="/images/dot.svg" alt="Logo" height={24} width={24} preview={false} />
                        </Dropdown>
                    </>
                }
                else if(status == "Cancelled"){
                    return <>
                        <Button>Continue</Button>
                        <Dropdown overlay={menu} trigger={['click']} className="btn-icon-round" placement="bottomRight">
                            <Image src="/images/dot.svg" alt="Logo" height={24} width={24} preview={false} />
                        </Dropdown>
                    </>
                }
                else if(status == "In Progress"){
                    return <>
                        <Button>Download PDF</Button>
                        <Dropdown overlay={menu} trigger={['click']} className="btn-icon-round" placement="bottomRight">
                            <Image src="/images/dot.svg" alt="Logo" height={24} width={24} preview={false} />
                        </Dropdown>
                    </>
                }
                else if(status == "I need to sign"){
                    return <>
                        <Button>Send Reminder</Button>
                        <Dropdown overlay={menu} trigger={['click']} className="btn-icon-round" placement="bottomRight">
                            <Image src="/images/dot.svg" alt="Logo" height={24} width={24} preview={false} />
                        </Dropdown>
                    </>
                }
                else if(status == "Completed"){
                    return <>
                        <Button>Create copy</Button>
                        <Dropdown overlay={menu} trigger={['click']} className="btn-icon-round" placement="bottomRight">
                            <Image src="/images/dot.svg" alt="Logo" height={24} width={24} preview={false} />
                        </Dropdown>
                    </>
                }
            },
            width: '15%'
        },
    ];

    const dataSource = [
        {
            key: '1',
            document: {
                mainTitle: 'Octet Design NDA',
                subTitle: 'To: ux test'
            },
            status: 'Draft',
            changes: '3 March, 2022',
            action:''
        },
        {
            key: '2',
            document: {
                mainTitle: 'Octet Design NDA',
                subTitle: 'To: ux test'
            },
            status: 'Cancelled',
            changes: '3 March, 2022',
            action:''
        },
        {
            key: '3',
            document: {
                mainTitle: 'Octet Design NDA',
                subTitle: 'To: ux test'
            },
            status: 'In Progress',
            changes: '3 March, 2022',
            action:''
        },
        {
            key: '4',
            document: {
                mainTitle: 'Octet Design NDA',
                subTitle: 'To: ux test'
            },
            status: 'I need to sign',
            changes: '3 March, 2022',
            action:''
        },
        {
            key: '5',
            document: {
                mainTitle: 'Octet Design NDA',
                subTitle: 'To: ux test'
            },
            status: 'Completed',
            changes: '3 March, 2022',
            action:''
        },
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
        
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const router = useRouter();

    const navigateDocument = () =>{
        router.push('/upload')
    }

    return (
        <Layout>
            <header className='header'>
                <h1>All Jobs</h1>
                <Search placeholder="Search" onSearch={onSearch} allowClear />
                <Space>
                    <Button>Export</Button>
                    <Button type='primary'>New Job</Button>
                </Space>
            </header>
            <main className='main-pad'>
                <Table dataSource={dataSource} columns={columns} pagination={false} className="table-1"/>
            </main>
        </Layout>
    )
}