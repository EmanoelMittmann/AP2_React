import { ButtonHTMLAttributes, CSSProperties } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

const BUTTONCSS : CSSProperties = {
    borderRadius: "8px",
    width: '13em',
    height: '5em',
    backgroundColor: '#65ABFD',
    border: 'none',
    cursor: "pointer"
}

export const Button = ({title, ...props}:IButtonProps) => <button style={BUTTONCSS} {...props}>{title}</button>
