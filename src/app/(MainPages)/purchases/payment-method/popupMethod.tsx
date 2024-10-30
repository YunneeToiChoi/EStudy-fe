"use client";
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import 'react-phone-number-input/style.css';
import PhoneInput, {
  formatPhoneNumber,
  isPossiblePhoneNumber,
} from 'react-phone-number-input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { handleAddWalletMoMo } from "@/service/api/apiWalletRequest";
interface DialogProps {
  open: boolean;
  setOpen:any
}

export const PopupPurchase:React.FC<DialogProps>=({open,setOpen}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [localOpen, setLocalOpen] = useState(false); 
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    const [walletType, setWalletType] = useState<string | null>(null);
    const [contactMethod, setContactMethod] = useState<'phone' | 'email'>('phone');
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [error, setError] = useState<string | null>(null);
    const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);

    useEffect(() => {
      if (open) {
        setLocalOpen(false);
        handleDialogClose();
      }
    }, [open]);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleDialogClose = () => {
        setSelectedWallet(null);
        setWalletType(null);
        setContactMethod('phone');
        setPhoneNumber(undefined);
        setEmail("");
        setCardName("");
        setCardNumber("");
        setError(null);
    };
  
    const toggleContactMethod = () => {
      setContactMethod(prevMethod => prevMethod === 'phone' ? 'email' : 'phone');
      setError(null); // Reset error when toggling contact method
      if (contactMethod === 'phone') {
        setPhoneNumber(undefined);
      } else {
        setEmail("");
      }
    };
  
    const handleSubmit = () => {
      let contactInfo = "";
  
      // Validate phone number or email
      if (contactMethod === 'phone') {
        if (!phoneNumber) {
          setError("Please enter your phone number.");
          return;
        }
        if (!isPossiblePhoneNumber(phoneNumber)) {
          setError("Please enter a valid phone number.");
          return;
        }
        contactInfo = (formatPhoneNumber(phoneNumber) || "").replace(/\s+/g, ""); 
      } else if (contactMethod === 'email') {
        if (!email) {
          setError("Please enter your email.");
          return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          setError("Please enter a valid email address.");
          return;
        }
        contactInfo = email; 
      }
  
      // Validate wallet type and additional fields for credit cards
      if (walletType) {
        if (walletType === "credit") {
          if (!cardName || !cardNumber) {
            setError("Please enter cardholder name and card number.");
            return;
          }
          const cardNumberPattern = /^\d{16}$/; // Basic card number validation
          if (!cardNumberPattern.test(cardNumber)) {
            setError("Please enter a valid card number (16 digits).");
            return;
          }
        }
  
        // If all validations pass, handle the wallet addition
        handleAddWalletMoMo(user.userName, user.userId, walletType, contactInfo, dispatch,router); 
      }
    };
  
    return (
      <Dialog open={localOpen} onOpenChange={setLocalOpen}>
        <DialogTrigger asChild>
          <Button className="w-fit m-auto mt-3 rounded-3xl px-5 py-2 text-base font-normal">
            Add payment method
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-lg">Add a payment method</DialogTitle>
            <div className="h-[1px] bg-slate-300 w-full mt-11"></div>
            <DialogDescription>Choose your wallet type</DialogDescription>
          </DialogHeader>
  
          {!selectedWallet && (
            <div className="grid grid-cols-4 gap-4">
              {/* MoMo */}
              <Image
                alt="MoMo"
                className="m-auto cursor-pointer hover:scale-105 shadow-2xl duration-300 ease-in-out"
                src="https://paymentsdk.spotifycdn.com/svg/providers/momo.svg"
                width={80}
                height={80}
                quality={100}
                onClick={() => {
                  setSelectedWallet("momo");
                  setWalletType("Momo");
                }}
              />
  
              {/* VnPay */}
              <Image
                alt="VnPay"
                className="m-auto cursor-pointer hover:scale-105 shadow-2xl duration-300 ease-in-out rounded-xl"
                src="https://vinadesign.vn/uploads/thumbnails/800/2023/05/vnpay-logo-vinadesign-25-12-59-16.jpg"
                width={80}
                height={80}
                quality={100}
                onClick={() => {
                  setSelectedWallet("vnpay");
                  setWalletType("vnpay");
                }}
              />
  
              {/* ZaloPay */}
              <div
                className="w-20 h-20 flex justify-center hover:scale-105 items-center m-auto cursor-pointer shadow-2xl duration-300 ease-in-out rounded-xl p-2"
                onClick={() => {
                  setSelectedWallet("zalopay");
                  setWalletType("zalopay");
                }}
              >
                <Image
                  alt="ZaLoPay"
                  src="https://simg.zalopay.com.vn/zst/zlp-website/resources/images/new-landing-page/revamped-zalopay-logo.svg"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <Button className=" p-0 border-0 bg-transparent" onClick={handleClickOpen}>
             <div
                className="w-20 h-20 flex flex-col justify-center hover:scale-105 items-center m-auto cursor-pointer shadow-2xl duration-300 ease-in-out rounded-xl p-2"
              >
                <Image
                  alt="ATM"
                  src="https://th.bing.com/th/id/OIP.r-QugNKSpxLaMNDp7bHwUAHaHa?w=626&h=626&dpr=1.3&pid=ImgDetMain"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </Button>
            </div>
          )}
  
          {selectedWallet && (
            <div className="mt-4">
              {["momo", "vnpay", "zalopay"].includes(selectedWallet) && (
                <>
                  <label htmlFor="contact" className="block mb-2 text-sm font-medium">
                    {contactMethod === 'phone' ? 'Enter your phone number' : 'Enter your email'}
                  </label>
                  {contactMethod === 'phone' ? (
                    <>
                      <PhoneInput
                        id="phone"
                        defaultCountry="VN"
                        type="tel"
                        placeholder={`Enter ${selectedWallet} phone number`}
                        value={phoneNumber}
                        onChange={(value) => {
                          setPhoneNumber(value);
                          if (value) setError(null); // Clear error if value is present
                        }}
                        className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-0"
                      />
                    </>
                  ) : (
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value) setError(null); // Clear error if value is present
                      }}
                      className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-0"
                    />
                  )}
                  {error && <p className="text-red-500 text-sm italic">{error}</p>}
                  <div className=" w-full text-center">
                     <button
                    type="button"
                    onClick={toggleContactMethod}
                    className="text-black text-center hover:text-primary-bg-color w-fit mt-4"
                  >
                    {contactMethod === 'phone' ? 'Switch to Email' : 'Switch to Phone Number'}
                  </button>
                  </div>
                 
                </>
              )}
            </div>
          )}
           <DialogFooter className="mt-4">
           {
            selectedWallet==null ? (
                <DialogClose asChild>
            <Button
              type="button"
              className="w-fit px-8 rounded-3xl bg-white text-black border-0"
            >
              Cancel
            </Button>
          </DialogClose>
            ):(
                <Button
                type="button"
                className="w-fit px-8 rounded-3xl bg-white text-black border-0"
                onClick={handleDialogClose}
              >
                Back
              </Button>
            )
           }
          <Button type="button" onClick={handleSubmit} className="w-fit px-8 rounded-3xl">
            Add
          </Button>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  
