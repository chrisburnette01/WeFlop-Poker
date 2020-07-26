import { call, put, takeLatest } from 'redux-saga/effects';
import { SIGN_UP_REQUEST, signUpSuccess, signUpError } from '../../actions/application';
import { signUpRequest } from '../../../api/auth';

const signUp = function* (action) {
    try {
        const data = yield call(signUpRequest, action.payload);
        yield put(signUpSuccess(data));
    } catch (error) {
        yield put(signUpError(error));
    }
};

const application = function* () {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
};

export default application;
