import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import BookedItem from './BookedItem';
import Loader from '../../../Components/Loader';

const Booked = () => {
    const [selectedDay, setSelectedDay] = useState(new Date())
    const d = format(selectedDay, 'PP')
    const { data: bookings, isLoading, refetch } = useQuery({
        queryKey: ['bookings', d],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/${d}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('ForRent-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }

    return (
        <div className='w-[85%] mx-auto'>
            <section className="">
                <div className="container flex flex-col justify-center mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://media.istockphoto.com/id/109722688/photo/black-sports-car.jpg?s=612x612&w=0&k=20&c=b9XsVGszAPpDsWdWMlfsymDCVdSu-bljQo2bFGA00-k=" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <div className=''>
                            <DayPicker
                                className='flex justify-center items-center'
                                mode="single"
                                selected={selectedDay}
                                onSelect={setSelectedDay}
                            />
                            <p className='text-center'>You selected {d}.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                {
                    bookings.length ? <div>
                        <h2 className='text-2xl font-semibold text-primary'>{d}'s Bookings : </h2>
                        {
                            bookings.map(b => <BookedItem
                                key={b._id}
                                booking={b}
                                refetch={refetch}
                            ></BookedItem>)
                        }
                    </div>
                    : <div className='text-3xl text-primary font-semibold text-center mb-10'>No Bookings today!</div>
                }
            </div>
        </div>
    );
};

export default Booked;