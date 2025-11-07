import { NavBarComponent } from "../components/NavBar";

export function NavBarFeature ({list}) {
    return (
    <NavBarComponent>
    { list?.map((item) =>
        <li key={item.id}>
            <a className="nav-link" href={"#"+(item.link || item.text)}>
                {item.text}
            </a>
        </li>
    )}
    </NavBarComponent>
)}