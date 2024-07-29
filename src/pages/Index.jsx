import { useState, useCallback } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from "@/components/ui/button";
import { useWindowSize } from 'react-use';

const Index = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const { width, height } = useWindowSize();

  const handleConfettiClick = useCallback(() => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold text-white mb-8">Cool Confetti App</h1>
      <Button
        onClick={handleConfettiClick}
        className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300"
      >
        Celebrate!
      </Button>
      {isConfettiActive && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </div>
  );
};

export default Index;
