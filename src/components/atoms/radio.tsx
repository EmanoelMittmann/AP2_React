import { CSSProperties, ReactNode } from "react";

interface IRadioProps {
  label?: string;
  options: {text: string; input: ReactNode}[]
}

export const Radio = ({ label, options }: IRadioProps) => {
  
  const CONTAINERCSS: CSSProperties = {
    gap: '.875rem',
    display: 'flex'
  }

  const WRAPPERCSS : CSSProperties = {
    paddingLeft: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '3rem'
  }

  const MAINCSS: CSSProperties = {
    display:  "grid",
    gridGap: '.5rem',
    paddingBottom: '.875rem'
  }
  
  return (
    <div style={MAINCSS}>
      <label>{label}</label>
      <div style={WRAPPERCSS}>
        {options.map(({input,text}) => (
            <div style={CONTAINERCSS}>
              {input}
              {!!label && <p>{text}</p>}
            </div>
        ))}
      </div>
    </div>
  );
};
