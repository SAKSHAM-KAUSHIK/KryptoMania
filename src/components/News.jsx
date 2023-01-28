import React, { useState } from 'react';
import { Row, Select, Typography, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import moment from 'moment/moment';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage = 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWFtcWctZTIwa2tScVR0NVpKbG1QeGV4YmJnQXxBQ3Jtc0tuZEd2ZFNZMUZNN2hyWDdPYVo4bGxNV1BldE44aU45VWhyRUNyT1hlZmh6SnJGRkJ1RWhaV2R6Q0ZTV19sTHZJOFlxcEo0RnBTSjdlQUJLTWVoUnU0YU03SlpxU3ZTMXptVU45Rl85dFNBbTExMmJLWQ&q=https%3A%2F%2Fwww.bing.com%2Fth%3Fid%3DOVFT.mpzuVZnv8dwIMRfQGPbOPC%26pid%3DNews&v=9DDX3US3kss';


function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  const { data } = useGetCryptosQuery(50);

  // console.log(cryptoNews);

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.name}
                </Title>
                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
              </div>
              <p>
                {news.description.length > 150 ? `${news.description.substring(0, 150)}...` :
                  news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>

              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export default News
