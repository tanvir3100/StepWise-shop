import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import HeroCard from "../HeroCard/HeroCard";

const HeroLeft = () => {
    const icons = <>
        <FaInstagramSquare />
        <FaSquareFacebook />
        <FaWhatsappSquare />
        <FaTwitterSquare />
        <FaLinkedin />
    </>
    return (
        <div className="w-80 sm:w-72 md:w-72 lg:w-56 xl:w-64 p-2 mt-6 flex flex-col gap-6">
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
                <HeroCard
                    heading={'Nike Cortez shoes'}
                    image={"https://i.ibb.co/GJNQqps/Default-beautiful-shoe-nike-for-website-background-image-with-0-3.jpg"}
                />
            </div>
            <div className="card">
                <div className="rounded-xl group">
                    <p className="text-lg border-gray-600 border-b-2">Contact Us</p>
                    <p className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga ut magnam!
                    </p>
                </div>
                <div className="flex justify-center items-center text-3xl text-slate-700">
                    {icons}
                </div>
            </div>
        </div>
    );
};

export default HeroLeft;