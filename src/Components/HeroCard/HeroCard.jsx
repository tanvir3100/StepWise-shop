/* eslint-disable react/prop-types */

const HeroCard = ({ image, heading }) => {
    return (
        <div>
            <div className="card group">
                <div className="rounded-xl">
                    <figure className="rounded-xl"><img className="rounded-xl group-hover:scale-110 transition" src={image} alt="Shoes" /></figure>
                </div>
                <p className="text-sm pl-3 pt-2 group-hover:underline">{heading}</p>
            </div>
        </div>
    );
};

export default HeroCard;