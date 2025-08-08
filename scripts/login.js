const loginForm = {
    email:      { id: 'login_email',    },
    password:   { id: 'login_password', },
    button:     { value: 'iniciar sesion' },
}
const formControl = ({tag, ...properties}) => 
Object.assign(document.createElement(tag), {
    className: 'b-2 b-solid o-0 r-2 p-1', 
    ...properties 
})
function renderForm (){
    const h2 = document.createElement("h2");
    
    login.setAttribute('class','d-flex flex-column m-auto p-2 g-1');
    h2.innerText = "Iniciar sesion"
    login.appendChild(h2);

    Object.entries(loginForm).forEach(([k,v]) => {
        const label = k !== 'button' ? formControl({ 
            htmlFor: v.id, tag: 'label', innerText: k, className: 'text-uppercase' 
        }) : '';
        const input = formControl({
            tag: 'input', type: k, name: k, ...v,
            oninput: (ev) => validate(ev.target)
        })
        login.append(label, input);
    })
}
renderForm();