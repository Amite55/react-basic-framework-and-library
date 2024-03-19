import PropTypes from 'prop-types';
import { AiTwotoneCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-3'><AiTwotoneCheckCircle className='text-green-500' /> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;