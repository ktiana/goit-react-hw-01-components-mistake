import data from '../data/user';
import stats from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';
import { Statistics } from '../components/Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 26,
          color: '#010101',
          gap: '20px',
        }}
      >
        <Profile data={data} />
        <Statistics title="Upload stats" stats={stats} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
        <GlobalStyleComponent />
      </div>
    </ThemeProvider>
  );
};
