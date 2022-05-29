import PropTypes from 'prop-types';

export default function Friends({ friends }) {
  const elements = friends.map(friend => (
    <li key={friend.id} class="item">
      <span class="status"></span>
      <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p class="name">{friend.name}</p>
    </li>
  ));

  return <ul class="friend-list">{elements}</ul>;
}
