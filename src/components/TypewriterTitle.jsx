import { TypeAnimation } from 'react-type-animation';
import '../assets/fonts/fonts.css';
export default function TypewriterTitle(props) {
    return (
      <TypeAnimation
        sequence={[props.text, 1000]}
        speed={50}
        style={{
        fontSize: '4em',
        fontFamily: 'Quicksand',
        color: "#747fe0"
        }}
      />
    )
  }
  