import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutHook from "./CheckoutHook";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../components/hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const Payment = () => {
    const [cart] = useCart();
    const amount = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(amount.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading={"------Please provide------"} Heading={"payment"}></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutHook price={price} cart={cart}></CheckoutHook>
            </Elements>
        </div>
    );
};

export default Payment;