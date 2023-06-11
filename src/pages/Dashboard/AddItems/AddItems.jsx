import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const image_token = import.meta.env.VITE_IMAGE_TOKEN;

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`;
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imageURl = imageResponse.data.display_url;
                    console.log(data, imageURl)
                    const { name, price, category, recipe } = data;


                    const menuItem = { name, price: parseFloat(price), category, recipe, image: imageURl };
                    console.log(menuItem)
                    
                    axiosSecure.post('/menu', menuItem)
                    .then(data=>{
                        if(data.data.insertedId){
                            reset()
                            toast.success("recipe added successfully")
                        }
                        console.log("new added menu data:" , data.data)
                    })
                }
            })
    };

    return (
        <div className="w-full h-screen mx-2">
            <Helmet><title>Bistro Boss | Add an Item</title></Helmet>
            <SectionTitle subHeading="---What's new?---" Heading="ADD AN ITEM"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 p-2 md:p-10 rounded-lg mx-10">
                {/* row-1 */}
                <div className="flex flex-row gap-5">
                    <div className="form-control w-full ">
                        <label className="label label-text font-semibold mt-5">Recipe name*</label>
                        <input className="input border-2 aria-selected:border-yellow-300 mt-3"
                            type="text"
                            placeholder="Food name"
                            {...register("name", { required: true, maxLength: 80 })} />
                        {errors.name && <span className="text-red-600 mt-2 ml-2">name field is required</span>}
                    </div>
                </div>
                {/* row-2 */}
                <div className="flex flex-row gap-5">
                    <div className="form-control w-full">
                        <label className="label label-text font-semibold mt-5">Category name*</label>
                        <select defaultValue='Pick one' id="category" className="select select-bordered">
                            <option disabled value="">Pike one</option>
                            <option value="pizza">pizza</option>
                            <option value="soup">soup</option>
                            <option value="salad">salad</option>
                            <option value="dessert">dessert</option>
                            <option value="drinks">drinks</option>
                            <option value="popular">drinks</option>
                            <option value="offered">drinks</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label className="label label-text font-semibold mt-5">Price*</label>
                        <input className=" w-full input border-2 aria-selected:border-yellow-300"
                            type="number"
                            placeholder="Price"
                            {...register("price", { required: true })} />
                        {errors.price && <span className="text-red-600 mt-2 ml-2">price field is required</span>}
                    </div>
                </div>
                {/*  */}
                <div className="flex flex-row gap-5">
                    <div className="form-control w-full">
                        <label className="label label-text font-semibold mt-5">Recipe details*</label>
                        <textarea rows={5} className="w-full textarea textarea-bordered border-2 aria-selected:border-yellow-300 mt-3"
                            type="text"
                            placeholder="Recipe"
                            {...register("recipe", { required: true, maxLength: 80 })} />
                        {errors.recipe && <span className="text-red-600 mt-2 ml-2">recipe field is required</span>}
                    </div>
                </div>
                {/* row-4 */}
                <div className="flex flex-row gap-5">
                    <div className="form-control">
                        <label className="label label-text font-semibold mt-5">Image*</label>
                        <input className="file-input file-input-bordered mt-3"
                            type="file"
                            {...register("image", { required: true })} />
                    </div>
                </div>
                <button className="btn flex justify-start my-10 bg-[#D1A054] border-0 hover:bg-yellow-600">Continue</button>
            </form>
        </div>
    );
};

export default AddItems;