/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Card = ({ category }) => {
    return (
        <div className="flex flex-grow card">
            <div className="card group p-2 bg-base-100 rounded-lg">
                <figure>
                    <img className="group-hover:scale-110 transition h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-44 sm:w-52 md:w-56 lg:w-60 xl:w-64" src={category.image} alt="Shoes" />
                </figure>
                <div className="card-body p-2 sm:p-4 md:p-5 lg:p-6 bg-base-100 bg-opacity-50 flex flex-grow">
                    <h2 className="text-xl lg:text-2xl">{category.name}</h2>
                    <p>{category.category}</p>
                    <p>Price: ${category.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn border-none bg-gradient-to-r from-[#ff2c2c] to-[#de2d19] text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
