interface Props {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ options, value, onChange }: Props) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
