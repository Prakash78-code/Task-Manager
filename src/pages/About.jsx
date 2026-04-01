export default function About() {
  return (
    <div
      style={{
        margin: "40px",
        padding: "20px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.05)",
        boxShadow: "0 0 20px rgba(255,0,0,0.3)",
      }}
    >
      <h1>👨‍💻 About This App</h1>
      <p>This is a PRO Task Manager built with React.</p>
    </div>
  );
}