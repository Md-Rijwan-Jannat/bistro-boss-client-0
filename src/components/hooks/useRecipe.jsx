import { useEffect, useState } from "react";

const useRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
            })
    }, [])
    return [recipes];
};

export default useRecipe;