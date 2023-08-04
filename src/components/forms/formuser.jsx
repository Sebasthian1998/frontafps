import axiosClient from 'config/config'
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Input, Tooltip, message, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { UsersAction } from 'store/user/userStore';
import clearIcon from 'img/utils/add.svg'

const FormUser = ({ dataForm, idUser, actualizar }) => {
    const { Option } = Select;

    const dispatch = useDispatch()
    const [tipoFormulario, setTipoFormulario] = useState('ADD')
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [dataFormulario, setDataFormulario] = useState({
        name: '',
        secondname: '',
        lastname: '',
        age: '',
        state: 'ACT',
        civilstatus: '',
        gender: '',
        birthday: '',
        email: '',
    })
    const initialForm = {
        name: '',
        secondname: '',
        lastname: '',
        age: '',
        state: 'ACT',
        civilstatus: '',
        gender: '',
        birthday: '',
        email: '',
        id: undefined
    }

    const actualizarCambios = () => {
        dispatch(UsersAction())
    }

    const clearForm = () => {
        setTipoFormulario('ADD')
        setDataFormulario({ ...initialForm })
        form.resetFields();
        actualizar()
    }

    const deleteUser = async () => {
        console.log('DELETE')
        try {
            if (idUser !== 0) {
                await axiosClient.delete(`user/` + idUser)
                actualizarCambios()
                clearForm()
                messageApi.open({
                    type: 'warning',
                    content: 'Usuario eliminado con éxito',
                });
            }
        } catch (error) {

        }
    }

    const onFill = (data) => {
        let objecto = {
            name: data.name,
            secondname: data.secondname,
            lastname: data.lastname,
            age: data.age,
            civilstatus: data.civilstatus,
            gender: data.gender,
            birthday: data.birthday,
            email: data.email,
        }
        console.log(objecto)
        form.setFieldsValue(objecto);
        console.log(form)
    };

    const guardarFormulario = async (values) => {
        console.log(values)
        try {
            let objeto = values
            objeto.state = 'ACT'
            if (tipoFormulario === "ADD") {
                objeto.state = 'ACT'
                await axiosClient.post('user', objeto)
                actualizarCambios(true)
                clearForm()
                messageApi.open({
                    type: 'success',
                    content: 'Usuario creado con éxito',
                });
            } else {
                objeto.state = 'ACT'
                await axiosClient.put('user/' + idUser, objeto)
                setTipoFormulario("ADD")
                actualizarCambios(true)
                clearForm()
                messageApi.open({
                    type: 'success',
                    content: 'Usuario editado con éxito',
                });
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        console.log(idUser)
        console.log(dataForm)
        if (idUser !== 0) {
            setTipoFormulario('EDIT')
            onFill(dataForm)
        }

    }, [idUser])

    const onGenderChange = (value) => {
        switch (value) {
            case 'M':
                form.setFieldsValue({
                    gender: 'M',
                });
                break;
            case 'F':
                form.setFieldsValue({
                    gender: 'F',
                });
                break;
            default:
        }
    };

    const onCivilChange = (value) => {
        switch (value) {
            case 'Casado':
                form.setFieldsValue({
                    civilstatus: 'Casado',
                });
                break;
            case 'Soltero':
                form.setFieldsValue({
                    civilstatus: 'Soltero',
                });
                break;
            case 'Viudo':
                form.setFieldsValue({
                    civilstatus: 'Viudo',
                });
                break;
            default:
        }
    };

    return (
        <div  >
            {contextHolder}
            <Tooltip placement="top" title={'Limpiar'}>
                <Button onClick={clearForm} >
                    <img height="17px" src={clearIcon} alt="" />
                </Button>
            </Tooltip>
            <Form
                form={form}
                onFinish={guardarFormulario}
                autoComplete="off"
            >
                <Col >
                    <Form.Item label="Nombre"
                        name="name"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'El nombre es requerido',
                    //     },
                    // ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Segundo Nombre"
                        name="secondname"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'El segundo nombre es requerido',
                    //     },
                    // ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Apellidos"
                        name="lastname"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'El apellido es requerido',
                    //     },
                    // ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Género"
                        name="gender"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'El género  es requerido',
                    //     },
                    // ]}
                    >
                        <Select
                            placeholder="Selecciona una opción"
                            onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="M">Masculino</Option>
                            <Option value="F">Femenino</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Edad"
                        name="age"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'La edad es requerida',
                    //     },
                    // ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Estado civil"
                        name="civilstatus"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'El estado civil es requerido',
                    //     },
                    // ]}
                    >
                        <Select
                            placeholder="Selecciona una opción"
                            onChange={onCivilChange}
                            allowClear
                        >
                            <Option value="Soltero">Soltero(a)</Option>
                            <Option value="Casado">Casado(a)</Option>
                            <Option value="Viudo">Viudo(a)</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Fecha Nacimiento"
                        name="birthday"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'La fecha de nacimiento es requerida',
                    //     },
                    // ]}
                    >
                 
                 <Input />
     
                    </Form.Item>
                    <Form.Item label="Correo"
                        name="email"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'El correo es requerido',
                    //     },
                    // ]}
                    >
                        <Input />
                    </Form.Item>


                    {(tipoFormulario === "ADD") ?
                        <Row>
                            <Col span={24}>
                                <Button block htmlType="submit" type="primary" className="btn w-100 done-btn">Aceptar</Button >
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col span={12}>
                                <Button block htmlType="button" danger className="btn  delete-btn w-100" onClick={deleteUser}>Eliminar Usuario</Button>
                            </Col>
                            <Col span={12}>
                                <Button block htmlType="submit" type="primary" className="btn w-100 done-btn"><strong>Editar</strong></Button >
                            </Col>
                        </Row>
                    }

                </Col>
            </Form>
        </div>
    );

}


export default FormUser;