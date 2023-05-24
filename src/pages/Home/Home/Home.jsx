import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecipe from "../ChefRecipe/ChefRecipe";
import Featured from "../Featured/Featured";
import Phone from "../Phone/Phone";
import PopularMenu from "../PopularMenu/PopularMenu";
import SubBanner from "../SubBanner/SubBanner";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SubBanner></SubBanner>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <ChefRecipe></ChefRecipe>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;