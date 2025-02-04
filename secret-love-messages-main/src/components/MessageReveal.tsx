import { useState } from "react";
import { Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface MessageRevealProps {
  onPasswordSuccess: () => void;
}

const MessageReveal = ({ onPasswordSuccess }: MessageRevealProps) => {
  const [password, setPassword] = useState("");
  const [revealed, setRevealed] = useState(false);
  const { toast } = useToast();

  const correctPassword = "pucca";
  const secretMessage = "My dearest Valentine, you mean the world to me! ❤️";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      setRevealed(true);
      onPasswordSuccess();
      toast({
        title: "💝 Password Correct!",
        description: "Revealing your special message...",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect Password",
        description: "Please try again with the correct password.",
      });
    }
  };

  if (revealed) {
    return (
      <div className="space-y-4 animate-in fade-in zoom-in duration-500">
        <Heart className="w-16 h-16 text-red-500 mx-auto animate-float-heart" />
        <img 
          src="/lovable-uploads/19412b0b-5ff9-4afd-b0fb-1cda479f14f2.png"
          alt="Valentine's Picture"
          className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg mb-4"
        />
        <p className="text-xl md:text-2xl font-semibold text-valentine-dark">
          {secretMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Enter the password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="max-w-xs mx-auto text-center"
        />
      </div>
      <Button type="submit" className="bg-valentine-purple hover:bg-valentine-pink text-valentine-dark">
        Reveal Message
      </Button>
    </form>
  );
};

export default MessageReveal;