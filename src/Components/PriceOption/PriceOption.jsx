import PropTypes from 'prop-types';

import { AiFillCheckCircle } from 'react-icons/ai';

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className='bg-gray-200 p-5 rounded-lg text-center flex flex-col'>
            <h3 >
                <span className="text-5xl"> {price}</span>
                <span className='text-xl'>/mon</span>
            </h3>

            <h4 className="text-3xl my-5">{name} </h4>
            
            <p className='space-y-2 text-start  flex-grow '>
                {
                    features.map((feature, idx) => <ul key={idx} className='flex items-center ' > <AiFillCheckCircle className='mr-2'></AiFillCheckCircle> {feature} </ul>)
                }
            </p>

            <button className='btn bg-gradient-to-r from-cyan-100 to-blue-600    font-bold w-full my-5'>Buy</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;