import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { FetchPostRequestActionTypes } from "../store/sagas";

type PostProps = {};

const Post: FC<PostProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch({
          type: FetchPostRequestActionTypes.requested,
          payload: 1,
        });
      }}
    >
      fetch posts
    </button>
  );
};

export default Post;
