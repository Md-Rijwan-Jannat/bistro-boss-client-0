import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../components/hooks/useAuth";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { toast } from "react-hot-toast";


const CheckoutHook = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [error, setError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        setProcessing(true)
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
        setProcessing(false)

        console.log('payment intent', paymentIntent);
        if (paymentIntent?.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                user: user?.displayName,
                quantity: cart.length,
                cartItemsId: cart.map(item => item._id),
                recipeItemsId: cart.map(item => item.recipeId),
                itemsName: cart.map(item => item.recipeName),
                price,
                date: new Date(),
                status: "service pending"
            }
            axiosSecure.post('/payment', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success('your payment Successfully')
                    }
                })
        }
    }
    return (
        <>
            <form className="mx-2 md:mx-10 bg-orange-50 p-5 rounded-lg lg:mx-16" onSubmit={handleSubmit}>
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
                <button className="btn bg-[#D1A054] border-0 hover:bg-yellow-600" type="submit" disabled={!stripe || !clientSecret || processing}>
                    payment
                </button>
            </form>
            {
                error && <p className="text-red-500">{error}</p>
            }
            {
                transactionId && <p className="mt-3 text-green-500">Transaction is complete with id:{transactionId}</p>
            }
        </>
    );
};

export default CheckoutHook;