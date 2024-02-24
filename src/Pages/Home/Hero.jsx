import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-center bg-cover object-cover p-4"
                style={{ backgroundImage: 'url(https://i.ibb.co/RNzVBty/Default-beautiful-shoe-nike-for-website-background-image-with-1.jpg)' }}>
                <div className="
                h-full 
                w-full
                flex
                flex-col
                lg:flex-row 
                items-center
                justify-center
                lg:justify-between
                ">
                    <div className="w-56 p-2 mt-10 lg:mt-6 flex flex-col gap-6">
                        <div className="card group">
                            <div className="rounded-xl">
                                <figure className="rounded-xl"><img className="rounded-xl group-hover:scale-110 transition" src="https://i.ibb.co/P1s75B2/Default-beautiful-shoe-nike-for-website-background-image-with-0-2.jpg" alt="Shoes" /></figure>
                            </div>
                            <p className="text-sm pl-3 pt-2 group-hover:underline">Air Force 1 shoes</p>
                        </div>
                        <div className="card group">
                            <div className="rounded-xl">
                                <figure className="rounded-xl"><img className="rounded-xl group-hover:scale-110 transition" src="https://i.ibb.co/19c6P4t/Default-beautiful-shoe-nike-for-website-background-image-with-0-1-2.jpg" alt="Shoes" /></figure>
                            </div>
                            <p className="text-sm pl-3 pt-2 group-hover:underline">Nike Dunk shoes</p>
                        </div>
                        <div className="card">
                            <div className="rounded-xl group">
                                <p className="text-lg border-gray-600 border-b-2 fonds">About Us</p>
                                <p className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga ut magnam!
                                </p>
                            </div>
                            <button className="btn rounded-full bg-gradient-to-r from-[#80af83] to-[#f37698] border-none text-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="w-56 p-2 mt-6 flex flex-col gap-6">
                        <div className="card">
                            <div className="rounded-xl group">
                                <p className="text-lg border-gray-600 border-b-2">Contact Us</p>
                                <p className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga ut magnam!
                                </p>
                            </div>
                            <div className="flex justify-center items-center">
                                <FaSquareFacebook className="text-xl"/>
                                <FaTwitterSquare/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="rounded-xl group">
                                <p className="text-lg border-gray-600 border-b-2">About Us</p>
                                <p className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga ut magnam!
                                </p>
                            </div>
                            <button className="btn rounded-full bg-gradient-to-r from-[#80af83] to-[#f37698] border-none text-lg">
                                Subscribe
                            </button>
                        </div>
                        <div className="card group">
                            <div className="rounded-xl">
                                <figure className="rounded-xl"><img className="rounded-xl group-hover:scale-110 transition" src="https://i.ibb.co/GJNQqps/Default-beautiful-shoe-nike-for-website-background-image-with-0-3.jpg" alt="Shoes" /></figure>
                            </div>
                            <p className="text-sm pl-3 pt-2 group-hover:underline">Nike Cortez shoes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;