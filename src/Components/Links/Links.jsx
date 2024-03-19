import PropTypes from 'prop-types';
const Links = ({route}) => {
    return (
        <li className="mr-10 hover:bg-slate-500 p-2 rounded-lg">
            <a href={route.path}>
                {route.name}
            </a></li>
    );
};
Links.propTypes = {
    route: PropTypes.object
}

export default Links;