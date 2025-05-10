
import { useState } from "react";
import { Eye } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const VisionForm = () => {
  const [leftEyePower, setLeftEyePower] = useState<string>("-2.5");
  const [rightEyePower, setRightEyePower] = useState<string>("-2.0");
  const [visionCondition, setVisionCondition] = useState<string>("none");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings Applied",
      description: "Your screen has been adjusted based on your vision details.",
    });
  };

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="flex flex-col items-center text-center">
          <Eye className="h-8 w-8 text-indigo-600 mb-2" />
          <h1 className="text-2xl font-bold text-indigo-700">Vision Enhancement Module</h1>
          <p className="text-indigo-600 mt-1">
            Enter your vision details to optimize your screen display
          </p>
        </div>
        
        <div className="border-t border-gray-200 pt-6" />
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="leftEyePower" className="text-indigo-700">
              Left Eye Power
            </Label>
            <Input
              id="leftEyePower"
              type="text"
              value={leftEyePower}
              onChange={(e) => setLeftEyePower(e.target.value)}
              className="border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="rightEyePower" className="text-indigo-700">
              Right Eye Power
            </Label>
            <Input
              id="rightEyePower"
              type="text"
              value={rightEyePower}
              onChange={(e) => setRightEyePower(e.target.value)}
              className="border-gray-300"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <Label className="text-indigo-700">Vision Condition</Label>
          <RadioGroup
            value={visionCondition}
            onValueChange={setVisionCondition}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="myopia" id="myopia" />
              <Label htmlFor="myopia" className="cursor-pointer">
                Myopia (Nearsightedness)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="presbyopia" id="presbyopia" />
              <Label htmlFor="presbyopia" className="cursor-pointer">
                Presbyopia (Farsightedness)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none" className="cursor-pointer">
                None / Other
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition-colors"
        >
          Adjust Screen
        </Button>
      </form>
    </div>
  );
};
