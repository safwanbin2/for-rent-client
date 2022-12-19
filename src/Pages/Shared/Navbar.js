import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, signInWithGoogle, logOut } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                const userData = {
                    email: user.email,
                    name: user.displayName,
                    img: user.photoURL,
                    role: 'admin'
                }
                saveUser(userData);
                getJWT(user.email);
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out')
                localStorage.removeItem('ForRent-token');
            })
            .catch(error => console.log(error))
    }

    const saveUser = (data) => {
        fetch(`https://for-rent-server.vercel.app/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    const getJWT = email => {
        fetch(`https://for-rent-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('ForRent-token', data.token);
            })
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li className="dropdown dropdown-hover font-semibold">
            <label tabIndex={0} className="">Client</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 ml-2 shadow bg-base-100 rounded-box w-52">
                <li className='font-semibold'><Link to='/bookings'>Cart</Link></li>
                <li className='font-semibold'><Link to=''>comming soon</Link></li>
            </ul>
        </li>
        <li className="dropdown dropdown-hover font-semibold">
            <label tabIndex={0} className="">Admin</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 ml-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/inventory'>Inventory</Link></li>
                <li><Link to='/booked'>Booked</Link></li>
                <li><Link to='/addcar'>Add Car</Link></li>
            </ul>
        </li>
        <li className='font-semibold'><Link to='/contact'>Contact</Link></li>
    </>
    const socialIcons = <>
        {user ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt='' src={user?.photoURL} />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <Link className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                </li>
                <li><Link>Settings</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
            </ul>
        </div>
            : <button onClick={handleGoogleLogin} className='px-2 text-2xl'><BsGoogle /></button>}
    </>
    return (
        <div className="navbar bg-base-100 w-[95%] md:w-[85%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <Link className="" to='/'><img className='w-24' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {socialIcons}
            </div>
        </div>
    );
};

export default Navbar;