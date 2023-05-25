import { Helmet } from "react-helmet";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg2 from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg2 from "../../../assets/menu/pizza-bg.jpg";
import soupImg2 from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../components/hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuButton from "../../../components/MenuButton/MenuButton";
import MenuCategory from "../MenuCategory/MenuCategory";
import Cover from "../../shared/Cover/Cover";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const soups = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} coverTitle="Our Menu" coverDetails="Would you like to try a dist"></Cover>

            {/* offered section  */}

            <section className="mb-16">
                <SectionTitle
                    subHeading={"---Don't miss---"}
                    Heading={"TODAY'S OFFER"}
                ></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
                <MenuButton btnMenu={"ORDER YOUR FAVOURITE FOOD"}></MenuButton>
            </section>


            {/* dessert section */}

            <section>
                <MenuCategory items={dessert} img={dessertImg2} title="Dessert" details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
                <MenuButton btnMenu={"ORDER YOUR FAVOURITE FOOD"}></MenuButton>
            </section>
            {/* pizza section */}

            <section>
               <MenuCategory items={pizza} img={pizzaImg2} title="pizza" details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
                <MenuButton btnMenu={"ORDER YOUR FAVOURITE FOOD"}></MenuButton>
            </section>
            {/* soups section */}

            <section>
               <MenuCategory items={soups} img={soupImg2} title="Soups" details='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
                <MenuButton btnMenu={"ORDER YOUR FAVOURITE FOOD"}></MenuButton>
            </section>
        </div>
    );
};

export default Menu;