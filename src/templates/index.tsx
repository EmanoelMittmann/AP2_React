import { CSSProperties, ReactNode } from "react"
import { Navbar } from "../components/navbar"

export const Template = ({children} : {children: ReactNode}) => {

    const css : CSSProperties = {
        width: '100%',
        margin: 0,
        padding: 0,
        height: '100%',
        overflowX: 'hidden'
    }
    const csschildren : CSSProperties = {
        margin: 'auto',
        padding: '2em'
    }

  return (
    <div style={css}>
        <Navbar/>
        <div style={csschildren}>
            {children}
        </div>
    </div>
  )
}