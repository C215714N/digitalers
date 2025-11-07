export function NavBarComponent ({appName, children}){
    return (
    <nav>
        <a href="#">{appName}</a>
        <button className="navbar-toggler navbar-toggler-icon"></button>
        {children}
    </nav>
)}