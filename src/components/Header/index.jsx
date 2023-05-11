import logo from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

export function Header () {
    return (
        <HeaderContainer>
        <img src={logo} alt="Rocket" />
        <h1>todo<span>ist</span></h1>
        </HeaderContainer>
    )
}