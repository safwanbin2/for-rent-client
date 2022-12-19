import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../Components/Loader';
import { AuthContext } from '../../Contexts/AuthProvider';
import BookinItems from './BookinItems';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings, isLoading, refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`https://for-rent-server.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('ForRent-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="flex flex-col w-[95%] md:w-[85%] mx-auto py-6 space-y-4 ">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                {
                    bookings.map(booking => <BookinItems
                        key={booking._id}
                        booking={booking}
                        refetch={refetch}
                    ></BookinItems>)
                }
            </ul>
            {/* <div className="space-y-1 text-right">
                <p>Total amount:
                    <span className="font-semibold">357 €</span>
                </p>
                <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end space-x-4">
                <button type="button" className="px-6 py-2 border rounded-md dark:border-blue-400">Back
                    <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
                <button type="button" className="px-6 py-2 border rounded-md dark:bg-blue-400 dark:text-gray-900 dark:border-blue-400">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
            </div> */}
        </div>
    );
};

export default Cart;