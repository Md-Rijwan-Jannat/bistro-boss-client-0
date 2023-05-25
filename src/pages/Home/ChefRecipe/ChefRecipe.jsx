// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useRecipe from "../../../components/hooks/useRecipe";
import Recipe from "../../shared/Recipe/Recipe";

const ChefRecipe = () => {
const [recipes] = useRecipe();
const chefRecipes = recipes.filter(menu => menu.category === "salad")
    // const [recipes, setRecipes] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const chefRecipes = data.filter(menu => menu.category === "salad")
    //             setRecipes(chefRecipes)
    //         })
    // }, [])
    return (
        <section className="mb-16">
            <SectionTitle
                Heading={"CHEF RECOMMENDS"}
                subHeading={"---Should Try---"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    chefRecipes.map(rec => <Recipe
                        key={rec._id}
                        rec={rec}
                    ></Recipe>)
                }
            </div>
        </section>
    );
};

export default ChefRecipe;