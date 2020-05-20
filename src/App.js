import React from 'react';
import {Row, Col, Button, Card, Input} from 'antd'
import Title from 'antd/lib/typography/Title';
import TableComponent from './Component/TableComponent'
import {RightCircleOutlined, NumberOutlined, FileTextOutlined, SendOutlined} from '@ant-design/icons'
import './App.css';
import Text from 'antd/lib/typography/Text';
import Paragraph from 'antd/lib/typography/Paragraph';
import {buttonStyle, textStyle, textAreaStyle, smsHistoryBtn, smsUnitBtn} from './Component/CustomStyles'

function App() {
  const {TextArea} = Input
  
  return (
    <div className="App">

      <Row>
        <Col xs={24} sm={24} md={12} lg={15} className="left">
          <Col className="title">
            <Button type="primary" shape="circle" size="large" style={buttonStyle}>
            <Title strong="true" className="button-text" style={textStyle}> C</Title>
            </Button>
            <Title level={4} style={{marginLeft:20}}>Christ The King College, <br/>Gwagwalada Abuja.</Title>
          </Col>
          <TableComponent />
        </Col>
        
        <Col xs={24} sm={24} md={12} lg={9}>
          <Col className="right-section">
            <Button type="primary" shape="round" size="large" style={smsHistoryBtn} className="">
              SMS history
              <FileTextOutlined />
            </Button>
            <Button type="danger" shape="round" size="large" style={smsUnitBtn} className="">
              Buy SMS units
              <RightCircleOutlined />
            </Button>
          </Col>
          
          <Col className="right-section adjust">
            <Card style={{ width: 350 }}>
              <NumberOutlined rotate="20" className="NumberOutlined"/>
              <Col >
              <Title className="text">12300</Title>
              <Paragraph className="mini-text">Units left</Paragraph>
              </Col>
            </Card>
          </Col>

          <Col className="input-section adjust">
              <Card className="input-card">
                <Title level={4}>Compose message</Title>
                <Text strong="true">Sender ID</Text>
                <Input style={{marginBottom:10}} placeholder="Enter Sender ID" />
                <Text strong="true">Recipients</Text>
                <TextArea style={{marginBottom:10}}
                  placeholder="Enter phone number separated by commas"
                  autoSize={{ minRows: 6}}
                />
                <Text>Number of Recipients: <strong>20</strong></Text>

                <Paragraph strong="true">Your message</Paragraph>
                <TextArea style={textAreaStyle}
                  placeholder="Enter your message"
                  autoSize={{ minRows: 6}}
                />
                <Text>Characters left: <strong>0/250</strong></Text>  

                <Col className="cancel">
                  <Button type="default" shape="round" size="large" className="button">
                    cancel
                  </Button>

                  <Button type="default" shape="round" size="large" className="button"> 
                    Send SMS
                    <SendOutlined />
                  </Button>
                </Col>
              </Card>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default App;
