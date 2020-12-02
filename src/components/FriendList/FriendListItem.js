import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class={isOnline ? s.online : s.offline}> {isOnline} </span>
      <img class={s.avatar} src={avatar} alt={name} width="48" />
      <p class={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
