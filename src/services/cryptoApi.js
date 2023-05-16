import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'da0e559690mshfbd17697b86796ep16e41fjsnfe5fdb7e212d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })

});

export const {
    useGetCryptosQuery, 
} = cryptoApi;


//const options = {
//    method: 'GET',
//    url: 'https://coinranking1.p.rapidapi.com/exchanges',
//    params: {
//      referenceCurrencyUuid: 'yhjMzLPhuIDl',
//      limit: '50',
//      offset: '0',
//      orderBy: '24hVolume',
//      orderDirection: 'desc'
//    },
//    headers: {
//      'X-RapidAPI-Key': 'da0e559690mshfbd17697b86796ep16e41fjsnfe5fdb7e212d',
//      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//    }
//  };