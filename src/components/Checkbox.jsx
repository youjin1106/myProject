const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={({ target: { checked } }) => onChange(checked)}
    />
  );
};
export default Checkbox;
