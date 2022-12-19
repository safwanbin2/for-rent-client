import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CarModal = ({ bookCar, setBookCar }) => {
    const [selectedDay, setSelectedDay] = useState(new Date())
    const d = format(selectedDay, 'PP')
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleBook = data => {
        const bookData = {
            carName: bookCar.name,
            carBrand: bookCar.brand,
            carImg: bookCar.banner,
            carId: bookCar._id,
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyerPhone: data.phone,
            bookingDate: d,
            perDay: bookCar.perDay,
            isApproved: false
        }
        fetch(`https://for-rent-server.vercel.app/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully booked')
                navigate('/')
                setBookCar('')
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <div className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold text-primary">{bookCar.name}</h3>
                    <div className=''>
                        <DayPicker
                            className='flex justify-center items-center'
                            mode="single"
                            selected={selectedDay}
                            onSelect={setSelectedDay}
                        />
                        <p className='text-center'>You selected {d}.</p>
                    </div>
                    <form onClick={handleSubmit(handleBook)} className="form-control">
                        <label className="label">
                            <span className="label-text">Phone :</span>
                        </label>
                        <input {...register('phone', {
                            required: "provide your phone number"
                        })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.phone && <p className='text-sm text-red-600'>{errors.phone.message}</p>}
                        <button className='btn btn-primary w-full my-4' type='submit'>Book now</button>
                    </form>
                </div>
            </label>
        </div>
    );
};

export default CarModal;