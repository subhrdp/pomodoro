import React, { useState, useEffect } from 'react';

function getState<T>(key: string, initialState: T): T {
  const savedState = localStorage.getItem(key);
  return savedState ? JSON.parse(savedState) : initialState;
}

function useLocalStorage<T>(
  key: string,
  initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => getState<T>(key, initialState));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
