import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { FallingLines } from 'react-loader-spinner';


const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonedata = data.data.data;
                const phoneWithFakeData = phonedata.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phoneWithFakeData);
                setLoading(false)
            })
    }, [])
    return (
        <div className="text-center">

            <div className="text-center items-center justify-center">

         { loading && (<FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />)}

            </div>

            <h2 className="text-4xl">Phones{phones.length}</h2>
            <BarChart className="mx-auto" width={1200} height={540} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;