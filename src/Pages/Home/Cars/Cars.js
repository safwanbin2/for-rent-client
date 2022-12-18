import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Components/Loader';
import Car from './Car';

const Cars = () => {
    const { data: cars, isLoading } = useQuery({
        queryKey: ['allcars'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allcars`)
            const data = await res.json()
            return data;
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    console.log(cars)
    return (
        <div className='w-[85%] mx-auto my-10'>
            <h2 className='font-bold text-2xl '>Cars that are available</h2>
            <h3 className='text-primary font-bold'>Choose one: </h3>
            <div className='grid grid-cols-2 gap-8 my-5'>
                {
                    cars.map(c => <Car
                        key={c._id}
                        car={c}
                    ></Car>)
                }
            </div>
        </div>
    );
};

export default Cars;