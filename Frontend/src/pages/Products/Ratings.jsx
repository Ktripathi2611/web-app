import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings = ({ value, text, color }) => {
  // Ensure value is a number and falls within the expected range
  value = Number(value);
  if (isNaN(value) || value < 0 || value > 5) {
    console.error("Invalid value for rating:", value);
    value = 0; // Default to 0 if the value is invalid
  }

  const fullStars = Math.floor(value);
  const halfStars = value - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = Math.max(0, 5 - fullStars - halfStars);

  console.log("Ratings Component:", { value, fullStars, halfStars, emptyStars });

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className={`text-${color} ml-1`} />
      ))}

      {halfStars === 1 && <FaStarHalfAlt className={`text-${color} ml-1`} />}
      
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className={`text-${color} ml-1`} />
      ))}

      <span className={`rating-text ml-2 text-${color}`}>
        {text && text}
      </span>
    </div>
  );
};

Ratings.defaultProps = {
  color: "yellow-500",
};

export default Ratings;
