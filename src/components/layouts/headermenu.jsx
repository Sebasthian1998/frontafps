import React from 'react';
import { Col, Row, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import logo from 'img/afp.png';

const HeaderMenu = ({ title }) => {

    return (
        <>

            <Row className="text-gillsans-medium">
                <Col xs={12} sm={4} >
                    <Link to="/">
                        <img height="80px" className="pl-5" src={logo} alt="Logo" />
                    </Link>
                </Col>
                <Col span={8}  >

                    <Link to="/usuarios" >
                        <Button block size="large">
                            USUARIOS
                        </Button>
                    </Link>
                </Col>
                <Col span={8} >
                    <Link to="/kits" >
                        <Button block size="large">
                            KITS
                        </Button>
                    </Link>
                </Col>
            </Row>

            <div className="bgmenu">
                <Row >

                    <Col span={24} className="text-center mt-1">
                        <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                            <h1>{title}</h1>
                        </Space>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default HeaderMenu;