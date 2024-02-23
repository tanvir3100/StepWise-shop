

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-center bg-cover object-cover p-4"
                style={{ backgroundImage: 'url(https://i.ibb.co/RNzVBty/Default-beautiful-shoe-nike-for-website-background-image-with-1.jpg)' }}>
                <div className="
                h-full 
                w-full
                flex 
                items-center
                justify-between
                ">
                    <div className="w-60 p-2 bg-base-100 opacity-50">
                        <h1 className="mb-5 text-5xl font-bold">
                            Hello there
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">
                            Get Started
                        </button>
                    </div>
                    <div className="w-60 p-2 bg-base-100 opacity-50">
                        <h1 className="mb-5 text-5xl font-bold">
                            Hello there
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;