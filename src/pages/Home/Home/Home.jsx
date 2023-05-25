import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecipe from "../ChefRecipe/ChefRecipe";
import Featured from "../Featured/Featured";
import Phone from "../Phone/Phone";
import PopularMenu from "../PopularMenu/PopularMenu";
import SubBanner from "../../../components/SubBanner/SubBanner";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SubBanner
            title={"Bistro Boss"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio veritatis quod molestias autem porro reprehenderit vitae doloremque pariatur harum vero aliquam amet adipisci ab neque maiores nihil facilis beatae inventore, ipsum sapiente? Officia perferendis impedit tenetur sint cum amet, ea facilis suscipit laborum temporibus, vero numquam labore, excepturi nihil."
            ></SubBanner>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <ChefRecipe></ChefRecipe>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;