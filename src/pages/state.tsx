import { useCrossWindowState } from '@hooks/useCrossWindowState';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export function State() {
  const [list, setList] = useCrossWindowState<string[]>('state-page', []);
  const inputRef = useRef<HTMLInputElement>(null);

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
      <h2>useState Api Example</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '150px',
          padding: '10px',
          background: '#63f289',
        }}
      >
        <div style={{ display: 'flex' }}>
          <input type="text" ref={inputRef} />
          <button
            type="button"
            onClick={() => {
              if (inputRef.current?.value) {
                setList([...list, inputRef.current!.value]);
                inputRef.current!.value = '';
              }
            }}
          >
            Add
          </button>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <span>{item}</span>{' '}
              <button type="button" onClick={() => setList(list.filter((_, i) => i !== index))}>
                Del
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">
        Go back to <strong>home</strong>
      </Link>
    </div>
  );
}
