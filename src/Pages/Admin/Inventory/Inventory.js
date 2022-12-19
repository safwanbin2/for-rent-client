import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Components/Loader';
import SingleCar from './SingleCar';

const Inventory = () => {
    const { data: cars, isLoading, refetch } = useQuery({
        queryKey: ['allcars'],
        queryFn: async () => {
            const res = await fetch(`https://for-rent-server.vercel.app/allcars`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(cars);
    return (
        <div className='w-[95%] md:w-[85%] mx-auto my-10'>
            <h2 className='font-bold text-primary text-2xl '>Total Cars</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-5'>
                {
                    cars.map(c => <SingleCar
                        key={c._id}
                        car={c}
                        refetch={refetch}
                    ></SingleCar>)
                }
            </div>
        </div>
    );
};

export default Inventory;