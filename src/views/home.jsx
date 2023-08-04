import React from 'react';
import { Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <Row className="text-gillsans-medium">
                <Col span={12}  >
                    <Link to="/usuarios" >
                        <Button block size="large">
                            USUARIOS
                        </Button>
                    </Link>
                </Col>
                <Col span={12} >
                    <Link to="/kits" >
                        <Button block size="large">
                            KITS
                        </Button>
                    </Link>
                </Col>
            </Row>
            </>
    );
}

export default Home;