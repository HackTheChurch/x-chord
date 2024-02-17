export default function Main({ children }) {
  return (
    <main className="max-w-[1000px] w-[90vw] flex flex-col items-start min-h-[70vh]">
      {children}
    </main>
  );
}
