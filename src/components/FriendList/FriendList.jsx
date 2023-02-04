import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <span
            className={isOnline ? css.active : css.inactive}
            styles={{ isOnline } ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
          ></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    inOnline: PropTypes.bool,
  }).isRequired,
};
