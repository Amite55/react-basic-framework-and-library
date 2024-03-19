import { useState } from "react";
import Links from "../Links/Links";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' },
      ];      
    return (
        <div>
             <nav className=" p-4">
            <div  onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {
                open === true ? <ImCross /> : <TiThMenu />
            }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : '-top-72'}
             bg-slate-800 p-6 shadow-xl rounded-lg`}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
            </nav>
            <div  className="lg:divider"></div>
        </div>
    );
};

export default Navbar;