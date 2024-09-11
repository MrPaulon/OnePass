import { BebasNeueText as BebasNeue, PoppinsText as Poppins, TextProps } from './Themed';

export function PoppinsText(props: TextProps) {
  return <Poppins {...props} style={[props.style, { fontFamily: 'Poppins' }]} />;
}

export function BebasNeueText(props: TextProps) {
  return <BebasNeue {...props} style={[props.style, { fontFamily: 'BebasNeue' }]} />;
}
