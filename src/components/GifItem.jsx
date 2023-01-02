import PropTypes from "prop-types";

const GifItem = ({title, url}) => {
  return (
    <div className="card">
      <img 
        src={url} 
        style={{width:"200px", height:"200px"}}
        alt={title}/>
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default GifItem;