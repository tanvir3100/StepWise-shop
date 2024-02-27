/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Card = ({ category }) => {
    return (
        <div className="flex flex-grow">
            <div className="card shadow-xl rounded-none">
                <figure>
                    <img className="h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 w-full" src={category.image} alt="Shoes" />
                </figure>
                <div className="card-body p-2 sm:p-4 md:p-5 lg:p-6 bg-opacity-50 flex flex-grow">
                    <h2 className="text-xl lg:text-3xl">{category.name}</h2>
                    <p>{category.category}</p>
                    <p>{category.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;