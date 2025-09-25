export function AlertButton({ children, message = '' }) {
  function handleClick() {
    alert(message);
  }

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
