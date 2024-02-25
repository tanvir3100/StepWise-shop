import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import HeroCard from "../HeroCard/HeroCard";

const HeroLeft = () => {
    return (
        <div className="w-56 p-2 mt-6 flex flex-col gap-6">
            <div className="card">
                <div className="rounded-xl group">
                    <p className="text-lg border-gray-600 border-b-2">Contact Us</p>
                    <p className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga ut magnam!
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <FaSquareFacebook className="text-xl" />
                    <FaTwitterSquare />
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
                <HeroCard
                    heading={'Nike Cortez shoes'}
                    image={"https://i.ibb.co/GJNQqps/Default-beautiful-shoe-nike-for-website-background-image-with-0-3.jpg"}
                />
            </div>
        </div>
    );
};

export default HeroLeft;