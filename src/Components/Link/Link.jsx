import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li>
            <a href={route.path} className="mr-10">{route.name}</a>
        </li>
    );
};

Link.propTypes ={
    route: PropTypes.array
}

export default Link;