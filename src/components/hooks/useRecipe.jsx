import { useEffect, useState } from "react";

const useRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-rose.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
            })
    }, [])
    return [recipes];
};

export default useRecipe;