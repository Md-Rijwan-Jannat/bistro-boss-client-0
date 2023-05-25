import { useEffect, useState } from "react";

const useRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
            })
    }, [])
    return [recipes];
};

export default useRecipe;