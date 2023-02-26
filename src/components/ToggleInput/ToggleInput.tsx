import Container from './ToggleInput.styles';

type Props = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

function ToggleInput({ label, checked, onChange }: Props) {
  return (
    <Container checked={checked}>
      {label}
      <input type='checkbox' checked={checked} onChange={onChange} />
      <div>
        <span />
      </div>
    </Container>
  );
}
export default ToggleInput;
