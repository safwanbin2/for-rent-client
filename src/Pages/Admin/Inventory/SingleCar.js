import React from 'react';
import { toast } from 'react-hot-toast';
import { IoMdColorFill, IoMdColorPalette } from 'react-icons/io';
import { TbArmchair, TbEngine, TbTrash } from 'react-icons/tb';
import './SingleCar.css';

const SingleCar = ({ car, refetch }) => {
    const { name, banner, milage, color, sit, turbo, _id } = car;

    const handleDelete = (id) => {
        fetch(`https://for-rent-server.vercel.app/allcars?id=${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('ForRent-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('car deleted successfully')
                    refetch();
                }
            })
    }

    return (
        <div to={`car/${_id}`} className='bg-base-200 p-6 hover:shadow-lg relative car-parent'>
            <h3 className='text-2xl font-semibold text-center mb-4'>{name}</h3>
            <div className='grid items-center' style={{ gridTemplateColumns: "2fr 1fr" }}>
                <img src={banner} alt="" />
                <div>
                    <div className='flex gap-2 my-2'>
                        <p className='text-xl'><IoMdColorPalette /></p>
                        <p>{color}</p>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <p className='text-xl'><IoMdColorFill /></p>
                        <p>{milage}</p>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <p className='text-xl'><TbArmchair /></p>
                        <p>{sit}</p>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <p className='text-xl'><TbEngine /></p>
                        <p>{turbo} turbo</p>
                    </div>
                </div>
            </div>
            <button onClick={() => handleDelete(_id)} className='absolute bottom-4 right-4 del-btn hidden'>
                <p className='btn btn-circle text-xl btn-primary'><TbTrash /></p>
            </button>
        </div>
    );
};

export default SingleCar;