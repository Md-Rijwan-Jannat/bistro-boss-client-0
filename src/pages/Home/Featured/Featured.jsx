import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-no-repeat mb-16 py-5 px-5 md:px-20">
            <SectionTitle 
            Heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-10 mx-2 md:mx-10 my-4 md:my-20 bg-slate-400 bg-opacity-40 p-5 rounded-xl">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-4">
                    <p>March 20, 2023</p>
                    <h3 className="text-xl uppercase">WHERE CAN I GET SOME?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis, omnis dolorum voluptas nesciunt sed debitis quam voluptate facilis distinctio asperiores corporis incidunt nostrum praesentium, dolor vitae labore ratione fugiat deleniti eos dicta aspernatur! Amet expedita, quas quia molestias sunt aliquam dignissimos culpa dolore quibusdam eligendi adipisci libero explicabo excepturi!</p>
                    <button className="btn btn-outline border-l-0 border-r-0 border-t-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;