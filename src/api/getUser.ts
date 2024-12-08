import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { dataType } from '../redux/store';

export const userSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search/users' }), 
  endpoints: (builder) => ({
    getUsers: builder.query<dataType , {user: string , currentPage: number} >({
        query: ({user ,currentPage }) => `?q=${user}&per_page=10&page=${currentPage}` 
    })
  }),
});

export const {useGetUsersQuery} = userSlice

