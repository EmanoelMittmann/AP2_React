import { CSSProperties } from "react"
import IMG from '../../assets/foto.png'
export const Navbar = () => {

    const css : CSSProperties = {
        width: '97.69%',
        height: '9em',
        display: 'flex',
        alignItems: 'center',
        padding: '1em',
        backgroundColor: '#65ABFD'
    }
    const csschildren : CSSProperties = {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

  return (
    <div style={css}>
        <div style={csschildren}>
            <img src={IMG}/>
            <h2>ENTREVERO</h2>
            <div></div>
        </div>
    </div>
  )
}
