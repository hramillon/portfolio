export default function Warn({message, className,translation1}) {
    return(
        <div className={`warn ${className}`}>
            <p translation={translation1}>{message}</p>
        </div>
    );
}