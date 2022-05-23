import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Link to="/state">
        Go to <strong>useState</strong> example
      </Link>
      <Link to="/context">
        Go to <strong>Contex API</strong> example
      </Link>
    </div>
  );
}
