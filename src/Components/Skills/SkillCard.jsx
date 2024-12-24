import PropTypes from 'prop-types';
import '../Skills/Skills.css';

const SkillCard = ({ imgUrl, caption, color }) => {
  return (
    <div className="skillDiv md:h-28 md:w-28 max-md:h-32 flex flex-col items-center p-3 max-md:pt-6 gap-2">
      <img className="h-12 max-md:h-8" src={imgUrl} alt={caption} />
      <p className="font-semibold max-md:text-xs" style={{ color: color }}>
        {caption}
      </p>
    </div>
  )
};

SkillCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SkillCard;
