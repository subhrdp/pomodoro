import React, { useRef, useEffect } from 'react';
import Container from './Backdrop.styles';
import useOnEscape from 'hooks/useOnEscape';

type Props = {
  handleClose: () => void;
  children: React.ReactNode;
};

function Backdrop({ handleClose, children }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent) => {
    if (
      backdropRef.current === event.target ||
      wrapperRef.current === event.target
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    const pomodoro = document.getElementById('pomodoro') as HTMLElement;
    pomodoro.style.filter = 'blur(0.25rem)';

    return () => {
      pomodoro.style.filter = 'none';
    };
  });

  useOnEscape(handleClose);

  return (
    <Container ref={backdropRef} onClick={handleClick}>
      <div ref={wrapperRef} onClick={handleClick}>
        {children}
      </div>
    </Container>
  );
}

export default Backdrop;
