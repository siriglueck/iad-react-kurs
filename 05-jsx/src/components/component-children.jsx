export default function ComponentChildren({ color = "blue", title = "", children }) {

    return <div style={{ borderWidth: 1, borderColor: color, borderStyle: 'solid' }}>
        <h3>{title}</h3>
        <hr />
        {children}     
    </div>
}