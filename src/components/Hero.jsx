import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Define an array of image URLs
const imageUrls = [
  "src/assets/small cards/4d1042746b45388353d27bf5d31e8c9d4.png",
  "src/assets/small cards/9c1039f7a2e9e9ad417e98b6637d225aa.png",
  "src/assets/small cards/7b0b01022b58beea49226a3ef7ac710769.png",
  "src/assets/small cards/534dae84eee21e9ad6823f110afe7728.png",
  "src/assets/small cards/534dae84eee21e9ad6823f110afe7728.png",
  "src/assets/small cards/534dae84eee21e9ad6823f110afe7728.png"
];

export default function App() {
  // Map over the image URLs to create tile components
  const items = imageUrls.map((url, index) => <Tile key={index} imageUrl={url} />);
  
  const responsive = {
    2000: {
      items: 10
    },
    1200: {
      items: 4
    },
    500: {
      items: 3
    },
    0: {
      items: 1
    }
  };

  return (
    <div>
      <AliceCarousel
        responsive={responsive}
        items={items}
        infinite
        animationDuration={200}
        mouseTracking
        touchTracking
      />
    </div>
  );
}

const TileStyles = {
  display: "inline-block",
  width: 150,
  height: 150,

  borderRadius: "10px",
  background: "white",
  margin: "10px",
  
};

// Modify the Tile component to accept imageUrl as a prop and display the image
function Tile({ imageUrl }) {
  return (
    <div  style={{ width: "150px", height: "150px", margin: "15px",display:'flex',  }} tabIndex={0} role="button">
      <img src={imageUrl} alt="tile" style={{ width: "110px", height: "110px", objectFit: "cover",border: "1px solid white",boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"  }} />
    </div>
  );
}
