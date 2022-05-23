import { useCrossWindowStateContext } from '@contexts/useCrossWindowStateContext';

export function List() {
  const { value, setValue } = useCrossWindowStateContext();

  return (
    <ul>
      {value.map((item, index) => (
        <li key={index}>
          <span>{item}</span>{' '}
          <button type="button" onClick={() => setValue(value.filter((_, i) => i !== index))}>
            Del
          </button>
        </li>
      ))}
    </ul>
  );
}
