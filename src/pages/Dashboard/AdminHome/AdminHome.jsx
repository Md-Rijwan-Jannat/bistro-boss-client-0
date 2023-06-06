import { useQuery } from "react-query";
import useAuth from "../../../components/hooks/useAuth";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { MdRestaurantMenu } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaShuttleVan, FaUsers, } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;

        }
    })

// rechart2



    // rechart1
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div className="m-5">
            <h2 className="text-3xl"> Welcome , <span className="text-yellow-600">{user?.displayName}</span></h2>
            <div className="md:flex gap-5 justify-between my-10">
                <div className="backGround1 gap-5 justify-center rounded-xl px-5 py-8 text-white flex items-center my-5 md:w-[250px]">
                    <FcMoneyTransfer size={45}></FcMoneyTransfer>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold">${stats.revenue}</h2>
                        <p className="text-xl">revenue</p>
                    </div>
                </div>
                <div className="backGround2 gap-5 justify-center rounded-xl px-5 py-8 text-white flex items-center my-5 md:w-[250px]">
                    <FaUsers size={45}></FaUsers>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold">${stats.user}</h2>
                        <p className="text-xl">Customers</p>
                    </div>
                </div>
                <div className="backGround3 gap-5 justify-center rounded-xl px-5 py-8 text-white flex items-center my-5 md:w-[250px]">
                    <MdRestaurantMenu size={45}></MdRestaurantMenu>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold">${stats.menu}</h2>
                        <p className="text-xl">Products</p>
                    </div>
                </div>
                <div className="backGround4 gap-5 justify-center rounded-xl px-5 py-8 text-white flex items-center my-5 md:w-[250px]">
                    <FaShuttleVan size={45}></FaShuttleVan>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold">${stats.order}</h2>
                        <p className="text-xl">Order</p>
                    </div>
                </div>

            </div>
            <div className="flex m-5 w-full">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie dataKey="value" data={data} fill="#8884d8" label />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;