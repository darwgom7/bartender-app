import React, {useState} from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form'
import BartenderService from "../services/BartenderService";

function BartenderFormComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const  [resultados, setResultados]= useState([]);
    const onSubmit = (data) => {
        console.log(data);
        getResultados(data.numeroIteracion, data.idPila)
    }

    const getResultados= (numeroIteracion, idPila) => {
        BartenderService.getResultadoIteracion(numeroIteracion, idPila).then(response => {
            setResultados(response.data);
            console.log('Data new: ', response.data)
        })
    }

    return (
        <div>
            <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                <Form.Field className='form-group mt-4'>
                    <div className='form-group text-right'>
                        <div className='d-flex justify-content-end'>
                            <label htmlFor='formControlItera'>Número iteraciones</label>
                        </div>
                        <input
                            id='formControlItera'
                            className='form-control text-center'
                            placeholder='Número de iteraciones...'
                            type="number"
                            min="1"
                            max="3"
                            {...register("numeroIteracion", { required: true, min: 1, max: 3 })}
                        />
                    </div>
                </Form.Field>
                <div className='text-center'>
                    {errors.numeroIteracion && <small className='text-danger'>Porfavor ingrese un valor correcto</small>}
                </div>
                <Form.Field>
                    <div className='form-group mt-4'>
                        <div className='d-flex justify-content-end'>
                            <label htmlFor='formControlId'>ID pila</label>
                        </div>
                        <input
                            id='formControlId'
                            className='form-control text-center'
                            placeholder='Id pila vasos...'
                            type="number" 
                            min="1"
                            max="3"
                            {...register("idPila", { required: true, min: 1, max: 3 })}
                        />
                    </div>
                </Form.Field>
                <div className='text-center'>
                    {errors.idPila && <small className='text-danger'>Porfavor ingrese un valor correcto</small>}
                </div>
                <div className='form-group mt-4'>
                    <div className='d-flex justify-content-end'>
                        <Button type='submit' className='btn btn-dark w-50'>Submit</Button>
                    </div>
                </div>
            </Form>
            <div className='container mt-10'>
               {
                    resultados.map((resultado) => <h2 className='resultado'>{resultado}</h2>)
               }
            </div>
        </div>
    )
}

export default BartenderFormComponent;