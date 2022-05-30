import Profile from './components/profile/Profile';
import profileData from './data/user.json';

import Stats from './components/stats/Stats';
import statsData from './data/statistics.json';

import FriendList from './components/friendList/FriendList';
import friendsData from './data/friends.json';

import Transactions from 'components/transactions/Transactions';
import transactionData from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...profileData} />
      <Stats title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <Transactions items={transactionData} />
    </div>
  );
};
