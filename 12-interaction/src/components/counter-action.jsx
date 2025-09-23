export function CounterAction({ onAction = () => { } , label = 'Click'}) {
    return <>
        <div className="counter-action">
            <button onClick={onAction}>{label}</button>
        </div>
    </>
}