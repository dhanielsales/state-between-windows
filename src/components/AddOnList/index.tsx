import { useCrossWindowStateContext } from '../../contexts/useCrossWindowStateContext';
import { useRef } from 'react';

export function AddOnList() {
  const { setValue, value } = useCrossWindowStateContext();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ display: 'flex' }}>
      <input type="text" ref={inputRef} />
      <button
        type="button"
        onClick={() => {
          if (inputRef.current?.value) {
            setValue([...value, inputRef.current!.value]);
            inputRef.current!.value = '';
          }
        }}
      >
        Add
      </button>
    </div>
  );
}
