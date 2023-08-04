import React, { useEffect, useState } from 'react';
import { Col, Row,Button, message  } from 'antd';
import HeaderMenu from 'components/layouts/headermenu'
import TableGlobal from 'components/tables/table';
import FormUser from 'components/forms/formuser';
import { useDispatch, useSelector } from 'react-redux';
import { UsersAction } from 'store/user/userStore';
import axiosClient from 'config/config';

const Usuarios = () => {
    const dispatch = useDispatch()
    const [dataForm,setDataForm] = useState({})
    const [idUser,setIdUser] = useState(0)
    const users = useSelector(store => store.users.array)
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'Segundo Nombre',
            dataIndex: 'secondname',
            key: 'id',
        },
        {
            title: 'Apellidos',
            dataIndex: 'lastname',
            key: 'id',
        },
        {
            title: 'Género',
            key: 'id',
            dataIndex: 'gender',
            render: (_, record) => (
                <span>{(record.gender)==='M'? 'Masculino' : 'Femenino'}</span>
            ),
        },
        {
            title: 'Edad',
            key: 'id',
            dataIndex: 'age',
            render: (_, record) => (
                <span >
                    {record.age} años   
                </span>
            ),

        },
        {
            title: 'Estado civil',
            key: 'id',
            dataIndex: 'civilstatus',

        },
        {
            title: 'Fecha Nac.',
            key: 'id',
            dataIndex: 'birthday',

        },
        {
            title: 'Correo',
            key: 'id',
            dataIndex: 'email',
        },
        {
            title: 'Escoger',
            key: 'id',
            dataIndex: 'id',
            render: (_, record) => (
                <Button onClick = {()=>seeData(record.id)}>
                    Ver 
                </Button>
            ),
        },

    ];

    const seeData =async (id) =>{
        try{
            const data = await axiosClient.get('/user/'+id)
            console.log(data)
            setDataForm(data.data)
            if(id !==0){
                setIdUser(id)
            }
        }catch{

        }
    }

    const actualizar= () =>{
        setIdUser(0)
    }

    useEffect(() => {
        dispatch(UsersAction())
    }, [])

    return (
        <Row className="px-0">
            <Col span={24}>
                <HeaderMenu title={`Usuarios`} />
                <TableGlobal columns={columns} data={users}></TableGlobal>

                <FormUser actualizar={actualizar} dataForm={dataForm} idUser={idUser}></FormUser>
            </Col>
        </Row>
    );
}

export default Usuarios;