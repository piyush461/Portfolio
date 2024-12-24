import PropTypes from 'prop-types';

const SectionHead = (props) => {
  return (
    <p className="SectionHead text-3xl font-bold text-center text-cyan-400 mb-3">{props.head}</p>
  )
}

SectionHead.propTypes = {

    head: PropTypes.string.isRequired,
  };

export default SectionHead