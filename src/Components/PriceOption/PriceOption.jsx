import PropTypes from 'prop-types';
import Feature from '../Features/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-700 rounded-lg text-white flex flex-col p-4 text-center'>
            <h2>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/Monthly</span>
            </h2>
            <h4 className='text-3xl my-5'>{name}</h4>

            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='btn btn-primary mt-7 w-full'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;