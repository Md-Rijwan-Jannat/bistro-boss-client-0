import Recipe from "../../shared/Recipe/Recipe";


const RecipeCategory = ({recipes}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                recipes.map(rec => <Recipe
                    key={rec._id}
                    rec={rec}
                ></Recipe>)
            }
        </div>
    );
};

export default RecipeCategory;