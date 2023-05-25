import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useRecipe from "../../../components/hooks/useRecipe";
import RecipeCategory from "../../Order/RecipeCategory/RecipeCategory";

const ChefRecipe = () => {
    const [recipes] = useRecipe();
    const chefRecipes = recipes.filter(menu => menu.category === "salad")
    return (
        <section className="mb-16">
            <SectionTitle
                Heading={"CHEF RECOMMENDS"}
                subHeading={"---Should Try---"}
            ></SectionTitle>
            <RecipeCategory recipes={chefRecipes}></RecipeCategory>
        </section>
    );
};

export default ChefRecipe;