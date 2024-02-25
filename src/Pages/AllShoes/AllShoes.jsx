import categories from '../../../public/category.json'
import Card from '../../Components/Share/Card';

const AllShoes = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-center bg-cover object-cover p-4 pt-32"
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
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-5">
                        {
                            categories.map(category => <Card key={category.id} category={category} />)
                        }
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllShoes;