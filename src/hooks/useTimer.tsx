import { useState, useCallback, useEffect } from 'react';

function useTimer(time: number, onComplete: () => void) {
  const [active, setActive] = useState(false);
  const [total, setTotal] = useState(time);
  const [current, setCurrent] = useState(time);
  const [start, setStart] = useState(0);

  const toggle = () => {
    if (active) {
      setTotal(current);
      setActive(false);
    } else {
      setStart(Date.now());
      setActive(true);
    }
  };

  const reset = useCallback(() => {
    setActive(false);
    setTotal(time);
    setCurrent(time);
  }, [time]);

  useEffect(() => {
    if (active) {
      const timeLeft = total - (Date.now() - start);

      if (timeLeft > 0) {
        const timeout = setTimeout(() => {
          setCurrent(timeLeft);
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        localStorage.setItem('status', 'stopped');
        setActive(false);
        onComplete();
      }
    }
  }, [active, total, current, start, onComplete]);

  useEffect(() => {
    reset();
  }, [reset, time]);

  return { toggle, reset, active, current } as const;
}

export default useTimer;
