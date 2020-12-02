import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section class={s.statistics}>
      {title && <h2 class={s.title}>{title}</h2>}

      <ul class={s.statList}>
        {stats.map(stat => (
          <li class={s.item} key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default Statistics;
