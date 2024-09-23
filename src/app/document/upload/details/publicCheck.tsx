import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SwitchDemoProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function SwitchDemo({ checked, onCheckedChange }: SwitchDemoProps) {
  return (
    <div className="flex text-lg font-medium text-slate-400 items-center space-x-2">
      <Switch 
        id="airplane-mode" 
        checked={checked} 
        onCheckedChange={onCheckedChange} 
      />
      <Label htmlFor="airplane-mode">Public</Label>
    </div>
  );
}
