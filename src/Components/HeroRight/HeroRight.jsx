import HeroCard from "../HeroCard/HeroCard";


const HeroRight = () => {
    return (
        <div
            className="w-80 sm:w-72 md:w-72 lg:w-56 xl:w-56 
        p-2 mt-10 lg:mt-6 flex flex-col gap-6">
            <div className="card group">
                <HeroCard
                    heading=
                    {'Air Force 1 shoes'}
                    image=
                    {"https://i.ibb.co/P1s75B2/Default-beautiful-shoe-nike-for-website-background-image-with-0-2.jpg"}
                />
            </div>
            <div className="card group">
                <HeroCard
                    heading=
                    {'Nike Dunk shoes'}
                    image=
                    {"https://i.ibb.co/19c6P4t/Default-beautiful-shoe-nike-for-website-background-image-with-0-1-2.jpg"}
                />
            </div>
            <div className="card">
                <div className="rounded-xl group">
                    <p className="text-lg border-gray-600 border-b-2 w-1/2">
                        About Us
                    </p>
                    <p className="text-sm my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga ut magnam!
                    </p>
                </div>
                <button className="btn rounded-full bg-gradient-to-r from-[#80af83] to-[#f37698] border-none text-lg">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default HeroRight;