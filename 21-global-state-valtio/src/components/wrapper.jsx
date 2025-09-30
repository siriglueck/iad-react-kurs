export function Wrapper({ children }) {
  console.log('Render Wrapper');

  return (
    <div>
      {children}
    </div>
  );
}
