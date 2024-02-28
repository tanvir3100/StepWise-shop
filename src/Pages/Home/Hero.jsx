import HeroLeft from "../../Components/HeroLeft/HeroLeft";
import HeroRight from "../../Components/HeroRight/HeroRight";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-center bg-cover object-cover px-4 mx-auto"
                style={{ backgroundImage: 'url(https://i.ibb.co/RNzVBty/Default-beautiful-shoe-nike-for-website-background-image-with-1.jpg)' }}>
                <div className="
                h-full 
                w-full
                flex
                flex-col
                md:flex-row
                lg:flex-row 
                items-center
                justify-center
                lg:justify-between
                ">
                    <div>
                        <HeroRight />
                    </div>
                    <div>
                        <HeroLeft />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;