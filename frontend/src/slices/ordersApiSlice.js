import { ORDERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation({
      query: order => ({
        url: ORDERS_URL,
        method: 'POST',
        body: { ...order }
      }),
      invalidatesTags: ['Order']
    }),
    getOrderDetails: builder.query({
      query: orderId => ({
        url: `${ORDERS_URL}/${orderId}`
      }),
      providesTags: ['Order']
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/my-orders`
      }),
      providesTags: ['Order']
    }),
    requestPaymentOTP: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/request-payment-otp`,
        method: 'POST'
      }),
      invalidatesTags: ['Order']
    }),
    verifyPaymentOTP: builder.mutation({
      query: ({ orderId, otp }) => ({
        url: `${ORDERS_URL}/${orderId}/verify-payment-otp`,
        method: 'POST',
        body: { otp }
      }),
      invalidatesTags: ['Order']
    }),
    updateDeliver: builder.mutation({
      query: orderId => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: 'PUT'
      }),
      invalidatesTags: ['Order']
    }),

    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL
      }),
      providesTags: ['Order']
    })
  })
});

export const {
  useGetOrderDetailsQuery,
  useCreateOrderMutation,
  useRequestPaymentOTPMutation,
  useVerifyPaymentOTPMutation,
  useUpdateDeliverMutation,
  useGetMyOrdersQuery,
  useGetOrdersQuery
} = ordersApiSlice;
