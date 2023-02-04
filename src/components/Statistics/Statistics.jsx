import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const itemColors = ['#e2d4b7', '#9c9583', '#a1a499', '#b0bbbf', '#cadbc8'];

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <div className={css.box}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css['stat-list']}>
          {stats.map(({ id, label, percentage }, colors) => (
            <li
              className={css.item}
              key={id}
              style={{ background: itemColors[colors] }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    docx: PropTypes.number,
    mp3: PropTypes.number,
    pdf: PropTypes.number,
    mp4: PropTypes.number,
  }).isRequired,
};
