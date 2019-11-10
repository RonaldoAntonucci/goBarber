import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input name="oldPassword" placeholder="Sua senha atual" />
        <Input name="password" placeholder="Nova senha" />
        <Input name="confirmPassword" placeholder="Confirme sua nova senha" />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Logout</button>
    </Container>
  );
}
