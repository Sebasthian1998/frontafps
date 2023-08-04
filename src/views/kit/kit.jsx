import React from 'react';
import { Col, Row } from 'antd';
import HeaderMenu from 'components/layouts/headermenu'
import TableGlobal from 'components/tables/table';

const Kits = () => {

    return (
        <Row fluid className="px-0">
            <Col span={24}>
                <HeaderMenu title={`Kits`} />
            <TableGlobal></TableGlobal>

            </Col>
        </Row>
    );
}

export default Kits;