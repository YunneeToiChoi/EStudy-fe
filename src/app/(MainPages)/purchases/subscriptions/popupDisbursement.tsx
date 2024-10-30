import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/inputAmount";
import { Label } from "@/components/ui/label";
import { Disbursement } from "@/service/api/apiWalletRequest";
interface DisbursementProps {
  wallet: any;
  Component: React.ElementType;
}

export const DialogDisbursement: React.FC<DisbursementProps> = ({ wallet, Component }) => {
  const [amount, setAmount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const formatPrice = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleDialogClose = () => {
    setAmount(null);
    setError(null);
    setOpen(false);
  };

  const handleSubmit = async () => {
    const getWalletType = (walletType: string) => {
        switch (walletType) {
          case "linkWallet":
            return "Momo"
          case "vnpay":
            return "VnPay"
          case "zalopay":
            return "ZaloPay"
          case "credit_card":
            return "ATM"
          default:
            return "";
        }
      };
    const numericAmount = amount ? parseInt(amount.replace(/\./g, '')) : 0;

    if (numericAmount < 10000) {
      setError("Please enter a valid amount greater than or same 10.000 VND");
      return;
    }
     const res= await Disbursement(wallet,numericAmount,getWalletType(wallet.type))
     if(res===true){
       handleDialogClose(); 
     }
    
  };

  return (
    <Dialog 
        open={open} 
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) handleDialogClose();
        }}
      >
      <DialogTrigger asChild>
        <Button className="bg-transparent w-fit p-0 border-0">
          <Component />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Disburse Amount</DialogTitle>
          <DialogDescription>
          Enter the amount you wish to withdraw. Click &quot;withdraw&quot; to confirm.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="Amount" className="col-span-1">Amount (VND)</Label>
            <div className="relative w-full">
              <Input
                id="Amount"
                type="text"
                placeholder="0"
                value={amount || ""}
                onChange={(e) => {
                  const formattedValue = formatPrice(e.target.value);
                  setAmount(formattedValue);
                  if (parseInt(formattedValue.replace(/\./g, '')) > 0) setError(null);
                }}
                className="w-full pl-6 pr-16 rounded-3xl text-5xl font-bold py-12"
                style={{ paddingRight: "4rem" }} // Thêm khoảng trống cho chữ VND
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl">
                VND
              </span>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm italic">{error}</p>}
        </div>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" className="w-fit px-8 rounded-3xl bg-white text-black border-0">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSubmit} className="w-fit px-8 rounded-3xl">
          withdraw
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
