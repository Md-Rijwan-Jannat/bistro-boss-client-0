import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../components/hooks/useAuth";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";


const CheckoutHook = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [error, setError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");


    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            setError(error)
        } else {
            setError('')

        }



        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );


        if (confirmError) {
            setError(confirmError.message);
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);
        if(paymentIntent)
    }
    return (
        <>
            <form className="mx-2 md:mx-10 bg-orange-50 p-5 h-[300px] rounded-lg lg:mx-16" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-[#D1A054] border-0 hover:bg-yellow-600" type="submit" disabled={!stripe || !clientSecret}>
                    payment
                </button>
            </form>
            <div className="text-red-600">
                {
                    error && error.message
                }
            </div>
        </>
    );
};

export default CheckoutHook;