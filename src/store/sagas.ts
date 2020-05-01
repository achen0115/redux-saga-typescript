// import { call, put, takeEvery } from "redux-saga/effects";

import * as Api from "../utils/apiCall";
import { generateRequestActionTypes, generateRequestSaga } from "./helpers";

export const FetchPostRequestActionTypes = generateRequestActionTypes(
  "FETCH_POST"
);

const FetchPostRequestSaga = generateRequestSaga(
  FetchPostRequestActionTypes,
  Api.posts.get
);

// function* fetchPost(action) {
//   try {
//     const { data } = yield call(Api.posts.get, action.payload.postId);
//     yield put({ type: FetchPostRequestActionTypes.succeeded, data });
//   } catch (error) {
//     yield put({ type: FetchPostRequestActionTypes.failed, error });
//   }
// }

// function* mySaga() {
//   yield takeEvery(FetchPostRequestActionTypes.requested, fetchPost);
// }

export default FetchPostRequestSaga;
