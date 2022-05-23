import { AddOnList } from '@components/AddOnList';
import { List } from '@components/List';
import { CrossWindowStateProvider } from '@contexts/useCrossWindowStateContext';

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
        <AddOnList />
        <List />
      </div>
    </CrossWindowStateProvider>
  );
}
