export default function Preview({ code }) {
  return (
    <iframe
      srcDoc={code}
      className="w-full h-full"
    />
  );
}
