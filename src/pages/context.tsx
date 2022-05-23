import { AddOnList } from '@components/AddOnList';
import { List } from '@components/List';
import { CrossWindowStateProvider } from '@contexts/useCrossWindowStateContext';
import { Link } from 'react-router-dom';

export function Context() {
  return (
    <CrossWindowStateProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <h2>Context Api Example</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '150px',
            padding: '10px',
            background: '#73a9ff',
          }}
        >
          <AddOnList />
          <List />
        </div>
        <Link to="/">
          Go back to <strong>home</strong>
        </Link>
      </div>
    </CrossWindowStateProvider>
  );
}
