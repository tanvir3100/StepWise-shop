import { useState } from 'react';
import Card from '../../Components/Share/Card';
import useShoes from '../../hooks/useShoes';


const AllShoes = () => {
    const [filterCategory, setFilterCategory] = useState(null);
    const [sortOption, setSortOption] = useState(null)
    const [shoes] = useShoes();


    const handleClick = (shoes, category) => {
        setFilterCategory(category ? category.toLowerCase() : null);
    };

    const filteredCollection = shoes.filter(item => {
        const categoryMatch = !filterCategory || item.category.toLowerCase() === filterCategory;
        return categoryMatch;
        // return  brandMatch && categoryMatch;
    });

    const handleSort = e => {
        const selected = e.target.value;
        setSortOption(selected)
    }

    let sortedCollection = [...filteredCollection];
    if (sortOption === 'High to Low') {
        sortedCollection.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Low to High') {
        sortedCollection.sort((a, b) => a.price - b.price);
    }


    return (
        <div>
            <div className="hero min-h-screen bg-center bg-cover object-cover p-4 pt-10"
                style={{ backgroundImage: 'url(https://i.ibb.co/RNzVBty/Default-beautiful-shoe-nike-for-website-background-image-with-1.jpg)' }}>
                <div className="
                h-full 
                w-full
                flex
                flex-col
                items-center
                justify-center
                lg:justify-between
                ">
                    <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                        <div className='flex lg:justify-between items-center my-5 '>
                            <div className="flex gap-1 lg:gap-4 items-center">
                                <button onClick={() => handleClick()} className='btn btn-sm rounded-none'>All</button>
                                <button onClick={() => handleClick(null, 'air force')} className="btn rounded-none btn-sm">Air Force</button>
                                <button onClick={() => handleClick(null, 'nike dunk')} className="btn rounded-none btn-sm">Nike Dunk</button>
                                <button onClick={() => handleClick(null, 'nike cortez')} className="btn rounded-none btn-sm">Nike Cortez</button>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label className="form-control w-full max-w-xs rounded-none">
                                <div className="label">
                                    <span className="label-text">Pick the One You need</span>
                                </div>
                                <select onChange={handleSort} className="select select-bordered rounded-none">
                                    <option disabled selected>Pick one</option>
                                    <option>High to Low</option>
                                    <option>Low to High</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-5">
                        {
                            sortedCollection.map(category => <Card key={category.id} category={category} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllShoes;