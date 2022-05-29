import PropTypes from 'prop-types';

export default function Stats({ title, stats }) {
  const elements = stats.map(stat => (
    <li key={stat.id} className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
  ));
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">{elements}</ul>
    </section>
  );
}

Stats.defaultProps = {
  stats: [],
};
Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
