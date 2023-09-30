import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Phones = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        /*  fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
             .then(res => res.json())
             .then(data => setPhones(data.data)) */

        // axios diye load korte hole "axios.get()" eirokom likhte hoy plus '.then(res=> res.json())' eita likha lage na. direct ".then(data=>)" eita likha kntu arekta kahini holo eita data direct pawa jayna duitar bitore thake jemon ".then(data=>setPhones(data.data.data)" eirokom likhle then main array er data pawa jay 
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phonesWithFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData)
            })

    }, [])

    return (
        <div className="container mx-auto my-10">
            <h3 className="text-3xl">Phones: {phones.length} </h3>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip ></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;