import { TypeAnimation } from 'react-type-animation';
import '../assets/fonts/fonts.css';
import styles from './Introduction.module.css';

export default function TypewriterTitle(props) {
    return (
      <TypeAnimation
        sequence={[props.text, 1000]}
        speed={50}
        className={styles.typewriterText}
      />
    )
  }
  