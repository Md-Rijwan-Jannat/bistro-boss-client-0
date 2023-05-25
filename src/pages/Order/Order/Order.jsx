import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImage from '../../../assets/shop/banner2.jpg';
import Cover from '../../shared/Cover/Cover';

const Order = () => {
    return (
        <div>
            <Cover img={orderImage} coverTitle="Order Food" coverDetails="Would you like to try a dish!" ></Cover>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;