import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import cursoValidadator from '@/validators/cursoValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos')
    }

    return (
        <Pagina titulo="Curso">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidadator.nome )} />
                    {
                        errors.nome &&
                        <small className='mt-1 text-danger'>{errors.nome.message}</small>
                    }                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control isInvalid={errors.duracao} type="text" {...register('duracao', cursoValidadator.duracao )} />
                    {
                        errors.duracao &&
                        <small className='mt-1 text-danger'>{errors.duracao.message}</small>
                    }              
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control isInvalid={errors.duracao} type="text" {...register('modalidade', cursoValidadator.modalidade)} />
                    {
                        errors.modalidade &&
                        <small className='mt-1 text-danger'>{errors.modalidade.message}</small>
                    }     
                </Form.Group>
                    
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cursos">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form