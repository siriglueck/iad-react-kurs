export function CustomButton({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}

// Identisch mit dem oberen, demonstriert nur ein Muster,
// falls alle Properties weitergegeben werden an den Button
export function PropsSpreadButton(props) {
  return (
    <>
      <button {...props} />
    </>
  );
}

// Event handler props(onClick, ... ) kann ich in eigenen Komponenten
// auch anders benennen. Der Name sollte troztdem mit onXYZ beginnen.
export function PressableButton({ children, onPress }) {
  return (
    <>
      {/* // stopPropagation verhindert das weitere Click-Handling in der jewiligen Phase */}
      <button onClick={(ev) => { ev.stopPropagation(); onPress(); }}>{children}</button>
    </>
  );
}
