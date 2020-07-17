import React, { useState } from 'react';
import fetch from 'node-fetch';

import { Row, Col, Skeleton, Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const CovidCorona = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  let searchInput = null;

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Quốc gia',
      dataIndex: 'Country',
      key: 'Country',
      ...getColumnSearchProps('Country')
    },
    {
      title: 'Mới nhiễm',
      dataIndex: 'NewConfirmed',
      key: 'NewConfirmed'
    },
    {
      title: 'Tổng ca nhiễm',
      dataIndex: 'TotalConfirmed',
      key: 'TotalConfirmed'
    },
    {
      title: 'Tử vong',
      dataIndex: 'NewDeaths',
      key: 'NewDeaths'
    },
    {
      title: 'Tổng ca tử vong',
      dataIndex: 'TotalDeaths',
      key: 'TotalDeaths'
    },
    {
      title: 'Mới khỏi bệnh',
      dataIndex: 'NewRecovered',
      key: 'NewRecovered'
    },
    {
      title: 'Tổng ca khỏi bệnh',
      dataIndex: 'TotalRecovered',
      key: 'TotalRecovered'
    }
  ];

  if(!data){
    return(<Skeleton active />)
  }

  return(
    <>
      <h1>Get data covid</h1>
      <Row>
        <Col span={8}>
          <p>Moi nhiem {data.Global.NewConfirmed}</p>
          <p>Tong ca nhiem {data.Global.TotalConfirmed}</p>
        </Col>
        <Col span={8}>
          <p>Moi tu vong {data.Global.NewDeaths}</p>
          <p>Tong ca tu vong {data.Global.TotalDeaths}</p>
        </Col>
        <Col span={8}>
          <p>Khoi benh {data.Global.NewRecovered}</p>
          <p>Tong ca khoi {data.Global.TotalRecovered}</p>
        </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Table 
          columns={columns}
          dataSource={data.Countries}
          pagination={{defaultPageSize: 50, showSizeChanger: true,  pageSizeOptions: ['10', '50', '100']}}
          rowKey="CountryCode"
        />
      </Col>
    </Row>
    </>
  )
}

export async function getStaticProps(){
  const response = await fetch(`https://api.covid19api.com/summary`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  }
}

export default CovidCorona;