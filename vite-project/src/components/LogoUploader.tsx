import { useState } from "react";
import { HiCamera } from "react-icons/hi";

const LogoUploader = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Upload Box */}
      <div className="relative w-28 h-28 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden">
        
        {/* Image Preview OR Placeholder */}
        {image ? (
          <img
            src={image}
            alt="logo"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl font-satoshi-bold font-bold text-purple-600">J</span>
        )}

        {/* Hidden Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="logoUpload"
        />

        {/* Camera Button */}
        <label
          htmlFor="logoUpload"
          className="absolute bottom-0 right-0 z-20 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition"
        >
          <HiCamera size={18} />
        </label>
      </div>
    </div>
  );
};

export default LogoUploader;