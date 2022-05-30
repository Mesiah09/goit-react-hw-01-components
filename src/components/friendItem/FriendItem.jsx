import PropTypes from 'prop-types';
import s from './friendItem.module.css';

export default function FriendItem({ avatar, isOnline, name }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? `${s.status}` : `${s.statusOff}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
