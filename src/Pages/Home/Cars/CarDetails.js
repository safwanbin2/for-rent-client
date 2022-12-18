import React, { useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { GoLocation, GoNote } from 'react-icons/go';
import { IoMdColorFill, IoMdColorPalette } from 'react-icons/io';
import { TbArmchair, TbEngine } from 'react-icons/tb';
import { useLoaderData } from 'react-router-dom';
import CarModal from './CarModal';

const CarDetails = () => {
    const car = useLoaderData();
    const { name, brand, turbo, perDay, milage, location, color, sit, banner, condition, description1, description2 } = car;

    const [bookCar, setBookCar] = useState('')

    return (
        <div className='w-[85%] mx-auto my-10'>
            <h2 className='text-2xl font-semibold'><span className='text-primary'>{brand}</span> : {name}</h2>
            <div className='grid items-center' style={{ gridTemplateColumns: "2fr 1fr" }}>
                <img src={banner} alt="" />
                <div>
                    <div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><IoMdColorPalette /></p>
                            <p>{color}</p>
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><IoMdColorFill /></p>
                            <p>{milage}</p>
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><TbArmchair /></p>
                            <p>{sit}</p>
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><TbEngine /></p>
                            <p>{turbo} turbo</p>
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><FiDollarSign /></p>
                            <p>{perDay} per day</p>
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><GoLocation /></p>
                            <p>{location}</p>
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><GoNote /></p>
                            <p>{condition}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <label onClick={() => setBookCar(car)} htmlFor="my-modal-4" className="btn btn-primary"> Book now</label>
            </div>
            <p className='my-10'>
                {description1}
            </p>
            <img className='w-full -scale-x-[1]' src={banner} alt="" />
            <p className='my-10'>
                {description2}
            </p>
            {
                bookCar && <CarModal
                    bookCar={bookCar}
                    setBookCar={setBookCar}
                ></CarModal>
            }
        </div>
    );
};

export default CarDetails;