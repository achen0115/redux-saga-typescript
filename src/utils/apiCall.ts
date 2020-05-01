import axios from "axios";

export const baseURL = "https://jsonplaceholder.typicode.com";

const options = {
  baseURL,
  headers: { "Content-Type": "application/json" },
};

const request = axios.create(options);

type PostData = {
  title: string;
  body: string;
  userId: number;
};

type PartialUpdatePostData = {
  title?: string;
  body?: string;
  userId?: number;
};

export const posts = {
  list: () => request.get("/posts"),
  get: (id: number) => request.get(`/posts/${id}`),
  create: (data: PostData) => request.post(`/posts`, data),
  update: (data: PostData) => request.put(`/posts`, data),
  partialUpdate: (data: PartialUpdatePostData) => request.patch(`/posts`, data),
  delete: (data: PartialUpdatePostData) => request.patch(`/posts`, data),
};
