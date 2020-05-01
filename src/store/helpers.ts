import { put, call, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { AnyAction } from "redux";

type RequestActionTypes = {
  requested: string;
  succeeded: string;
  failed: string;
  reset: string;
};

export const generateRequestActionTypes = (
  requestName: string
): RequestActionTypes => {
  return {
    requested: `${requestName}_REQUESTED`,
    succeeded: `${requestName}_SUCCEEDED`,
    failed: `${requestName}_FAILED`,
    reset: `${requestName}_RESET`,
  };
};

export function generateRequestSaga<A>(
  requestActionTypes: RequestActionTypes,
  apiCall: (apiArgs: A) => Promise<AxiosResponse>
) {
  function* request(action: AnyAction) {
    console.log("I am here", action);
    try {
      const data = yield call(apiCall, action.payload);
      yield put({ type: requestActionTypes.succeeded, data });
    } catch (error) {
      yield put({ type: requestActionTypes.failed, error });
    }
  }

  function* listener() {
    yield takeEvery(requestActionTypes.requested, request);
  }
  return listener;
}
