import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if (response.user ){
            location.reload();
        }
    };

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    };

    const clicked = () => {
        setIsVisible(false)
    };


    return (
        <nav className='flex justify-center bg-yellow-600 p-4 '>
            <div className='flex items-center flex-shrink-0 underline lg:italic lg:font-mono text-red-600 mr-6 pr-20'>
                <Link to='/' className='font-semibold text-3xl tracking-tight'>Beer Collection</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-teal-200 border rounded border-teal-400 hover:text-white hover:border-white'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            {isVisible ? (
            <div className="flex text-justify">
                <div className="text-base flex">
                    <Button className="flex p-0 ml-auto bg-yellow-600 justify-end">
                        <div>
                            <Link to="/" onClick={ clicked } className="flex place-items-center mt-4
                             lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Home
                             </Link>
                        </div>
                    </Button>
                    <Button className="flex p-0 ml-auto bg-yellow-600 justify-end">
                        <div>
                            <Link to="/about" onClick={ clicked } className="flex place-items-center mt-4
                             lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                About
                             </Link>
                        </div>
                    </Button>
                    <Button className="flex p-0 ml-auto bg-yellow-600 justify-end">
                        <div>
                            <Link to="/dashboard" onClick={ clicked } className="flex place-items-center mt-4
                             lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Dashboard
                             </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ? 

                        <Button className="flex p-0 ml-auto bg-yellow-600 justify-end">
                            <div>
                                <Link to ="/" onClick={ () => { signInOnClick() }} className="flex place-items-center mt-4
                                    lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    Login
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className="flex p-0 ml-auto bg-yellow-600 justify-end">
                            <div>
                                <Link to ="/" onClick={ () => { signOutOnClick() }} className="flex place-items-center mt-4
                                    lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    Sign Out
                                </Link>
                            </div>
                        </Button>
                    }
                </div>
            </div>
            ):(
                <></>
            )}
        </nav>
    )  
}

export default Navbar