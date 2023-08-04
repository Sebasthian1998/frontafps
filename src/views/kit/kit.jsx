import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import HeaderMenu from 'components/layouts/headermenu'
import TableGlobal from 'components/tables/table';
import { useDispatch, useSelector } from 'react-redux';
import { KitsAction } from 'store/kit/kitStore';

const Kits = () => {

    const dispatch = useDispatch()
    const kits = useSelector(store => store.kits.array)
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'Cantidad',
            dataIndex: 'quantity',
            key: 'id',
            render: (_, record) => (
                <span >
                    {record.quantity} unidades   
                </span>
            ),
        },
        {
            title: 'Estado',
            key: 'id',
            dataIndex: 'state',
        },

    ];

    useEffect(() => {
        dispatch(KitsAction())
    }, [])

    return (
        <Row className="px-0">
            <Col span={24}>
                <HeaderMenu title={`Kits`} />
            <TableGlobal columns={columns} data={kits}></TableGlobal>

            </Col>
        </Row>
    );
}

export default Kits;