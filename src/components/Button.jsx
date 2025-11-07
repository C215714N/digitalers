export const Button = ({variant, size, text, onAction}) => 
    <button 
        className={'btn btn-'+variant+" " +size && size } 
        onClick={onAction}>
        {text}
    </button>