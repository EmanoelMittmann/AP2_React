import { CSSProperties, InputHTMLAttributes } from "react";

interface IinputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: IinputProps) => {
  const INPUTCSS: CSSProperties = {
    width: "15em",
    height: "2em",
    border: "none",
    borderRadius: '8px',
    paddingLeft: '1em'
  };
  const CONTAINERCSS: CSSProperties = {
    display:'flex',
    gap: '.2em',
    flexDirection: 'column'
  }

  return (
    <div style={CONTAINERCSS}>
      <label htmlFor="label">{label}</label>
      <input id="label" style={INPUTCSS} {...props} max={11} maxLength={11}/>
    </div>
  );
};

