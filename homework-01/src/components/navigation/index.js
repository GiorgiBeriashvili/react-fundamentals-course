import Logo from "../common/Logo";
import NavButton from "./Button";

const Navigation = (props) => {
    return <header className={props.variant}>
        <nav>
            <Logo variant={props.variant} />
            &nbsp;
            <NavButton text="Home" variant={props.variant} />
            &nbsp; &nbsp;
            <NavButton text="About" variant={props.variant} />
        </nav>
    </header>
}

export default Navigation;
