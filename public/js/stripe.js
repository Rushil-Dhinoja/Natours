import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_ZS6iSWFXbA3kkw3xa0dRs9GK00sHqdz18a');

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(err);
    showAlert('error', err);
  }
};
