import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../components/hooks/useCart";

const Recipe = ({ rec }) => {
    const { name, image, recipe, price, _id } = rec;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const addToCardHandler = (item) => {
        console.log(item)
        if (user && user.email) {
            const cartItem = { recipeId: _id, recipeName: name, image, price, email: user.email }
            fetch(`http://localhost:5000/carts`, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Added this item in cart!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be add to cart your item!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }
    return (
        <div className="relative text-center bg-[#F3F3F3] border rounded-md shadow">
            <img className="w-full rounded-t-md" src={image} alt="" />
            <p className="bg-slate-900 rounded-xl px-4 w-[86px] py-2 absolute right-5 top-5 text-white">{"$" + price}</p>
            <div className="p-5 space-y-3">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <button onClick={() => addToCardHandler(rec)} className="btn text-yellow-500 bg-[#E8E8E8] aria-selected:bg-[#1F2937] border-b-yellow-500 border-b-4 border-t-0 border-r-0 border-l-0">Add To Card</button>
            </div>
        </div>
    );
};

export default Recipe;