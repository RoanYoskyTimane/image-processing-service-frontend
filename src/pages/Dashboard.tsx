import { useState } from "react";
import Navbar from "../components/Navbar";
import ImageUploader from "../components/ImageUploader";
import TransformSettings from "../components/TransformSettings";
import ImageCropper from "../components/ImageCropper";
import api from "../api/axios";
import "../App.css"

export default function Dashboard() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [cropData, setCropData] = useState<any>(null);

  // Function to handle image selection from Uploader
  const handleImageSelect = (file: File) => {
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // The missing onProcess handler
  const handleTransformRequest = async (settings: any) => {
    if (!imageFile) return alert("Please upload an image first");

    // Combine settings with crop data for your backend JSON
    const fullPayload = {
      transformations: {
        ...settings.transformations,
        crop: cropData ? {
          width: Math.round(cropData.width),
          height: Math.round(cropData.height),
          x: Math.round(cropData.x),
          y: Math.round(cropData.y)
        } : null
      }
    };

    try {
      console.log("Sending to backend:", fullPayload);
      // Example: await api.post(`/images/UPLOAD_ID/transform`, fullPayload);
      alert("Transformation request sent!");
    } catch (err) {
      console.error("Backend error:", err);
    }
  };

  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="dashboard-content" style={{ padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "800" }}>
            Transform your images <span style={{ color: "#FD8A6B" }}>instantly.</span>
          </h1>
        </div>

        {/* 1. Upload Section */}
        {!previewUrl && <ImageUploader onFileSelect={handleImageSelect} />}

        {/* 2. Cropping Section (Visible only after upload) */}
        {previewUrl && (
          <ImageCropper 
            image={previewUrl} 
            onCropComplete={(pixels) => setCropData(pixels)} 
          />
        )}

        {/* 3. Settings Section (Visible only after upload) */}
        {previewUrl && (
          <TransformSettings onProcess={handleTransformRequest} />
        )}
      </main>
    </div>
  );
}