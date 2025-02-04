import FloatingHearts from "@/components/FloatingHearts";
import MessageReveal from "@/components/MessageReveal";
import { useState } from "react";

const Index = () => {
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-valentine-pink to-valentine-purple flex items-center justify-center p-4">
      <FloatingHearts />
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-valentine-dark mb-4">
          Happy Valentine's Day! 💝
        </h1>
        {!isPasswordEntered && (
          <p className="text-lg text-gray-600 mb-8">
            Enter the password to see your special message...
          </p>
        )}
        <MessageReveal onPasswordSuccess={() => setIsPasswordEntered(true)} />
      </div>
    </div>
  );
};

export default Index;