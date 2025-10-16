/* eslint-disable no-unused-vars */
import { Elements } from '@stripe/react-stripe-js'
import { useLocation } from 'react-router-dom'

import { CheckoutForm } from '../../components/Stripe/CheckoutForm'
import stripePromise from '../../config/stripeConfig'
export function Checkout() {
  const {
    state: { clientSecret },
  } = useLocation()
  console.log(clientSecret)
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  )
}