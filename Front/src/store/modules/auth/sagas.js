import { takeLatest, all, call, put } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* sigIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.error('Usuário nao é provider');
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', sigIn)]);
