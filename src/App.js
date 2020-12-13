import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './components/Data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Data/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/Data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/Data/transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
