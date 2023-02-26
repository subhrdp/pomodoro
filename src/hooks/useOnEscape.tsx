import { useEffect } from 'react';

function useOnEscape(callback: () => void) {
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });
}

export default useOnEscape;
