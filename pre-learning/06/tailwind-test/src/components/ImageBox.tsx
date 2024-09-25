export default function ImageBox() {
  return (
    <div className="w-200 h-500 p-6">
      <img
        src=""
        width="400"
        height="400"
        alt={`lamp`}
        className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
        style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
      />
    </div>
  );
}
