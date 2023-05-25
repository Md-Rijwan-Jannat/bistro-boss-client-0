import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/hooks/useMenu";
import MenuButton from "../../../components/MenuButton/MenuButton";
import MenuItem from "../../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-16">
            <SectionTitle
                subHeading={"---Check it out---"}
                Heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
                {
                    popular.map(item => <MenuItem

                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <MenuButton btnMenu={"View full Menu"}></MenuButton>
        </section>
    );
};

export default PopularMenu;