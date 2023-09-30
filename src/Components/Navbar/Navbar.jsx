import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
    ];


    return (

        <nav className="bg-cyan-200 p-5">
            <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                {
                    open === true ?
                        <AiOutlineClose></AiOutlineClose>
                        : <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
            <ul className={` md:flex absolute md:static duration-1000 bg-cyan-200 p-5 rounded-b-xl ${open ? 'top-16': '-top-60'} `} >
                {
                    routes.map(route => <Link key={route.id} route={route} ></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;