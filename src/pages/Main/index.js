import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './style';

export default function Main() {
    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
            </h1>
            <Form onSubmit={() => {}}>
                <input type="text" placeholder="Adicionar Repositório" />

                <SubmitButton>
                    <FaPlus />
                </SubmitButton>
            </Form>
        </Container>
    );
}
