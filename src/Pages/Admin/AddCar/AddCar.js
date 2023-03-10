import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddCar = data => {
        const image = data.banner[0];
        const formData = new FormData();
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=ee207df4d4ece17d8fc4767557525c84`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const banner = imgData.data.url;

                const newCar = {
                    brand: data.brand,
                    name: data.name,
                    banner: banner,
                    location: data.location,
                    sit: data.sit,
                    milage: data.milage,
                    perDay: data.perDay,
                    description1: data.description1,
                    description2: data.description2,
                    color: data.color,
                    turbo: data.turbo,
                    condition: data.condition
                }

                fetch(`https://for-rent-server.vercel.app/allcars`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('ForRent-token')}`
                    },
                    body: JSON.stringify(newCar)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.acknowledged){
                            toast.success('added successfully')
                            navigate('/')
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        toast.error('could not add')
                    })
            })
    }
    return (
        <div className='w-[95%] md:w-[85%] mx-auto'>
            Add new Item:
            <form onSubmit={handleSubmit(handleAddCar)}>
                {/* taking img */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select a photo: </span>
                    </label>
                    <input {...register('banner', {
                        required: "can not be empty"
                    })} type="file" className="file-input file-input-bordered file-input-lg w-full" />
                    {errors.banner && <p className='text-red-600'><small>{errors.banner.message}</small></p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name: </span>
                    </label>
                    <input {...register('name', {
                        required: "can not be empty"
                    })} type="text" placeholder="Name of phone" className="input input-bordered input-primary w-full" />
                    {errors.name && <p className='text-red-600'><small>{errors.name.message}</small></p>}
                </div>
                <div className='grid grid-cols-4 gap-1'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand: </span>
                        </label>
                        <select {...register('brand')} className="select select-primary w-full">
                            <option>Toyota</option>
                            <option>Lamborgini</option>
                            <option>Marcedes</option>
                            <option>Corvet</option>
                            <option>Mustang</option>
                            <option>Rols Royace</option>
                            <option>Ferarri</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location: </span>
                        </label>
                        <input {...register('location', {
                            required: "can not be empty"
                        })} type="text" placeholder="Location" className="input input-bordered input-primary w-full" />
                        {errors.location && <p className='text-red-600'><small>{errors.location.message}</small></p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Turbo: </span>
                        </label>
                        <input {...register('turbo', {
                            required: "can not be empty"
                        })} type="text" placeholder="turbo" className="input input-bordered input-primary w-full" />
                        {errors.turbo && <p className='text-red-600'><small>{errors.turbo.message}</small></p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Milage: </span>
                        </label>
                        <input {...register('milage', {
                            required: "can not be empty"
                        })} type="text" placeholder="milage" className="input input-bordered input-primary w-full" />
                        {errors.milage && <p className='text-red-600'><small>{errors.milage.message}</small></p>}
                    </div>
                </div>
                {/* price */}
                <div className='grid grid-cols-3 gap-1'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PerDay: </span>
                        </label>
                        <input {...register('perDay', {
                            required: "can not be empty"
                        })} type="text" placeholder="per Day" className="input input-bordered input-primary w-full" />
                        {errors.perDay && <p className='text-red-600'><small>{errors.perDay.message}</small></p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sit: </span>
                        </label>
                        <input {...register('sit', {
                            required: "can not be empty"
                        })} type="text" placeholder="sit" className="input input-bordered input-primary w-full" />
                        {errors.sit && <p className='text-red-600'><small>{errors.sit.message}</small></p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Color: </span>
                        </label>
                        <select {...register('color')} className="select select-primary w-full">
                            <option>Blue</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Yellow</option>
                            <option>Red</option>
                            <option>Cyan</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                {/* condtion and used */}
                <div className='grid grid-cols-2 gap-1'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description: </span>
                        </label>
                        <input {...register('description1', {
                            required: "can not be empty"
                        })} type='text' placeholder="Short Description" className="input input-bordered input-primary w-full" />
                        {errors.description1 && <p className='text-red-600'><small>{errors.description1.message}</small></p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition: </span>
                        </label>
                        <select {...register('condition')} className="select select-primary w-full">
                            <option>excellent</option>
                            <option>good</option>
                            <option>fair</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description: </span>
                    </label>
                    <input {...register('description2', {
                        required: 'can not be empty'
                    })} type="text" placeholder="Description" className="input input-bordered input-primary w-full" />
                    {errors.description2 && <p className='text-red-600'><small>{errors.description2.message}</small></p>}
                </div>
                <input type="submit" className='btn btn-primary my-4' value="Submit" />
            </form>
        </div>

    );
};

export default AddCar;