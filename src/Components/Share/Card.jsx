/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Card = ({ category }) => {
    console.log(category)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={category.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category.name}</h2>
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