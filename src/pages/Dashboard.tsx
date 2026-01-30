import Navbar from "../components/Navbar";
import ImageUploader from "../components/ImageUploader";
export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="dashboard-content">
        <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800" }}>Transform your images instantly.</h1>
        <p style={{ color: "#666", maxWidth: "600px", margin: "10px auto"}}>Upload section coming soon...</p>
        </div>
        <ImageUploader />      
      </main>
    </div>
  );
}