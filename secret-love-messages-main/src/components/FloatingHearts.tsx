import { Heart } from "lucide-react";

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-valentine-pink opacity-50 animate-float-heart`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;