import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ friends }) => (
  <>
    <li key={friends.id} className={css.item}>
      <span className={friends.isOnline ? css.online : css.offline}>
        {friends.isOnline}
      </span>
      <img
        className={css.avatar}
        src={friends.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friends.name}</p>
    </li>
  </>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
