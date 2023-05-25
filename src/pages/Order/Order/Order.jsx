import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImage from '../../../assets/shop/banner2.jpg';
import Cover from '../../shared/Cover/Cover';
import useRecipe from '../../../components/hooks/useRecipe';
import RecipeCategory from '../RecipeCategory/RecipeCategory';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Order = () => {
    const categories = ['salad', 'dessert', 'soups', 'pizza', 'drinks']
    const [recipes] = useRecipe();
    const { category } = useParams();
    const initIndex = categories.indexOf(category);
    console.log(category);
    const [index, setIndex] = useState(initIndex)
    const salads = recipes.filter(salad => salad.category === "salad");
    const desserts = recipes.filter(salad => salad.category === "dessert");
    const soups = recipes.filter(salad => salad.category === "soup");
    const pizza = recipes.filter(salad => salad.category === "pizza");
    const drinks = recipes.filter(salad => salad.category === "drinks");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={orderImage} coverTitle="Order Food" coverDetails="Would you like to try a dish!" ></Cover>
            <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
                <TabList className="flex items-center justify-center font-semibold space-x-10 uppercase text-gray-500">
                    <Tab className="aria-selected:border-b-4 aria-selected:font-bold aria-selected:border-b-yellow-500 aria-selected:text-gray-500">Salad</Tab>
                    <Tab className="aria-selected:border-b-4 aria-selected:font-bold aria-selected:border-b-yellow-500 aria-selected:text-gray-500">Dessert</Tab>
                    <Tab className="aria-selected:border-b-4 aria-selected:font-bold aria-selected:border-b-yellow-500 aria-selected:text-gray-500">Soups</Tab>
                    <Tab className="aria-selected:border-b-4 aria-selected:font-bold aria-selected:border-b-yellow-500 aria-selected:text-gray-500">Pizza</Tab>
                    <Tab className="aria-selected:border-b-4 aria-selected:font-bold aria-selected:border-b-yellow-500 aria-selected:text-gray-500">Drinks</Tab>
                </TabList>
                <TabPanel>
                    <RecipeCategory recipes={salads}></RecipeCategory>
                </TabPanel>
                <TabPanel>
                    <RecipeCategory recipes={desserts}></RecipeCategory>
                </TabPanel>
                <TabPanel>
                    <RecipeCategory recipes={soups}></RecipeCategory>
                </TabPanel>
                <TabPanel>
                    <RecipeCategory recipes={pizza}></RecipeCategory>
                </TabPanel>
                <TabPanel>
                    <RecipeCategory recipes={drinks}></RecipeCategory>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;