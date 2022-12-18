import React from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdDriveFileRenameOutline, MdApproval } from 'react-icons/md';

const BookedItem = ({ booking, refetch }) => {
    const { _id, carName, carImg, buyerName, buyerEmail, buyerPhone, carBrand, isApproved } = booking;

    const handleApprove = id => {
        fetch(`http://localhost:5000/bookings/approve/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('ForRent-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Approved Successfully')
                    refetch();
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Could not approve');
            })
    }

    return (
        <div className='w-[85%] mx-auto my-10'>
            <h2 className='text-2xl font-semibold'><span className='text-primary'>{carBrand}</span> : {carName}</h2>
            <div className='grid items-center' style={{ gridTemplateColumns: "2fr 1fr" }}>
                <img src={carImg} alt="" />
                <div>
                    <div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><MdDriveFileRenameOutline /></p>
                            <p>{buyerName}</p>
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><AiOutlinePhone /></p>
                            <p>{buyerPhone}</p>
                        </div>
                        <div className='flex gap-2 my-2 items-center'>
                            <p className='text-xl'><AiOutlineMail /></p>
                            <p>{buyerEmail}</p>
                        </div>
                        {
                            isApproved ? <button className='btn btn-disabled mt-2'>Approved</button>
                                : <button onClick={() => handleApprove(_id)} className='btn btn-primary mt-2'>
                                    <p className='text-xl'> <MdApproval /> </p>
                                    <p>Approve</p>
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedItem;