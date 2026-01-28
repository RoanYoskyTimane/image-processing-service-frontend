import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="dashboard-content" style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1>Transform your images instantly.</h1>
        <p style={{ color: "#666" }}>Upload section coming soon...</p>
      </main>
    </div>
  );
}