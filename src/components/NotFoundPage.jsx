
import React from 'react'
import { Row, Col, Typography } from 'antd'
import imgAdd from "../images/404.png"
const { Title } = Typography;


const NotFoundPage = () => {
  return (
      <div className='not-found-page'>
          <Row>
          <img src={imgAdd} alt="404" />
          </Row>
          <Row>
              <Col>
                  <Title level={1}>
                     Page Not Found!
                  </Title>
                  <Title level={3}>The page you are looking for is not found.</Title>
              </Col>
          </Row>
    </div>
  )
}

export default NotFoundPage
