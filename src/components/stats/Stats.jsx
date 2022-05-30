import PropTypes from 'prop-types';
import s from './stats.module.css';

export default function Stats({ title, stats }) {
  const elements = stats.map(stat => (
    <li key={stat.id} className={s.item}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}</span>
    </li>
  ));
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.list}>{elements}</ul>
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
