export default function Card({ title, children }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
