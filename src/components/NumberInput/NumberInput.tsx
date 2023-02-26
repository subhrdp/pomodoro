import React from 'react';
import Container from './NumberInput.styles';

type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

function NumberInput({ label, value, onChange, min = 1, max = 60 }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(event.target.value);
    if (number > max) {
      onChange(max);
    } else if (number < min) {
      onChange(min);
    } else {
      onChange(number);
    }
  };

  return (
    <Container>
      {label}
      <input
        value={value}
        onChange={handleChange}
        onFocus={(e) => e.target.select()}
        type='number'
      />
    </Container>
  );
}

export default NumberInput;
