"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect,useRef } from "react";
import { getAllBankLink } from '@/service/api/apiWalletRequest';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { addWalletBanking } from '@/service/api/apiWalletRequest';
import { OTPCode,OTPCodeType } from "@/schemaValidate/otp.schema";
import { linkBankAuthentication } from "@/service/api/apiWalletRequest";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<unknown> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const FullScreenDialogBanking: React.FC<DialogProps> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.persistedReducer.auth.getAllInfoUser?.data?.user);
  const [showOTP, setShowOTP] = useState(false);
  const [search, setSearch] = useState("");
  const [accountType, setAccountType] = useState("personal-account");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [identity, setIdentity] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [mobile, setMobile] = useState(""); 
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedBank, setSelectedBank] = useState<any>(null);
  const listBankLink = useSelector((state: any) => state.ThunkReducer.wallet.allBankLink.data);
  const [errors, setErrors] = useState<any>({});

  const form = useForm<OTPCodeType>({
    resolver: zodResolver(OTPCode),
    defaultValues: {
      pin: "",
    },
  })
  
  const handleSubmitOTP = async (value:OTPCodeType) => {
    const {pin} = value
    const walletBank = JSON.parse(localStorage.getItem("walletBank") || "{}");
    const data = {
      bankName: walletBank.name,
      confirmId: walletBank.confirmId,
      otpNumber: pin,
      walletId: walletBank.walletId,
    };

    const res= await linkBankAuthentication(data,dispatch);
    if(res===true){
      handleClose();
    }
  };


  const startCountdown = () => {
    setCountdown(60);
    setResendEnabled(false);

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current!);
          setResendEnabled(true); // Bật nút resend sau 1 phút
        }
        return prev - 1;
      });
    }, 1000);
  };

  const validateForm = () => {
    const newErrors: any = {};
  
    if (!/^\d{1,50}$/.test(accountNumber.replace(/\s+/g, ''))) {
      newErrors.accountNumber = 'Số thẻ phải có từ 1 đến 50 chữ số.';
    }
    if (!accountName) {
      newErrors.accountName = 'Tên in trên thẻ không được để trống';
    }
    if (!/^\d{12}$/.test(identity.replace(/\s+/g, ''))) {
      newErrors.identity = 'CCCD phải có 12 chữ số';
    }
    if (!/^\d{10}$/.test(mobile.replace(/\s+/g, ''))) {
      newErrors.mobile = 'Số điện thoại phải có 10 chữ số';
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.replace(/\s+/g, ''))) {
      newErrors.email = 'Email không hợp lệ';
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleAccountNumberChange = (value: string) => {
  // Chỉ giữ lại các ký tự là số
  const numericValue = value.replace(/\D/g, '');

  // Giới hạn độ dài tối đa là 50 ký tự
  if (numericValue.length > 50) return;

  // Cập nhật số tài khoản
  setAccountNumber(numericValue);

  // Kiểm tra điều kiện lỗi
  if (!numericValue || numericValue.length === 0) {
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      accountNumber: 'Số tài khoản không được để trống.',
    }));
  } else {
    // Xóa lỗi nếu thỏa điều kiện
    setErrors((prevErrors: any) => {
      const { accountNumber, ...rest } = prevErrors;
      return rest;
    });
  }
};

const handleMobileChange = (value: string) => {
    const rawValue = value.replace(/\D/g, '');
    if (rawValue.length > 10) return;
    const formattedValue = rawValue
      .replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
      .trim(); 
    setMobile(formattedValue);
    if (rawValue.length < 10) {
      setErrors((prevErrors: any) => ({ ...prevErrors, mobile: 'Số điện thoại phải có 10 chữ số' }));
    } else {
      setErrors((prevErrors: any) => {
        const { mobile, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  
  
  const handleAccountNameChange = (value: string) => {
    setAccountName(value);
    if (!value) {
      setErrors((prevErrors:any) => ({ ...prevErrors, accountName: 'Tên in trên thẻ không được để trống' }));
    } else {
      setErrors((prevErrors:any) => {
        const { accountName, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  
  const formatIdentityNumber = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{3})(?=\d)/g, '$1 ').trim();
  };
  
  const handleIdentityChange = (value: string) => {
    const rawValue = value.replace(/\s/g, '');
    if (rawValue.length > 12) return;
  
    const formattedValue = formatIdentityNumber(value);
    setIdentity(formattedValue);
    if (rawValue.length < 12) {
      setErrors((prevErrors:any) => ({ ...prevErrors, identity: 'CCCD phải có 12 chữ số' }));
    } else {
      setErrors((prevErrors:any) => {
        const { identity, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  
  
  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.replace(/\s+/g, ''))) {
      setErrors((prevErrors:any) => ({ ...prevErrors, email: 'Email không hợp lệ' }));
    } else {
      setErrors((prevErrors:any) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  
  const handleClose = () => {
    setShowForm(false);
    setSearch("");
    setAccountNumber("");
    setAccountName("");
    setIdentity("");
    setMobile("");
    setEmail("");
    setSelectedBank(null);
    setErrors({});
    setOpen(false)
};

  const handleSubmit = async () => {
    if (validateForm()) {
        const data={
            accountType:accountType,
            accountNumber:accountNumber.replace(/\s+/g, ''),
            accountName:accountName,
            identity:identity.replace(/\s+/g, ''),
            mobile:mobile.replace(/\s+/g, ''),
            email:email.replace(/\s+/g, ''),
            bankName: selectedBank.code,
            requestType : "linkBank",
            userId : user.userId
        }
        const res = await addWalletBanking(data);
        if(res===true){
          setShowOTP(true);
          startCountdown();
          setIsSubmitted(true);
        }
    }
  };

  const handleResend = () => {
    // Gọi lại logic submit khi nhấn Resend
    handleSubmit();
  };

  
  useEffect(() => {
    if (open) {
      const fetchBankLinks = async () => {
        await getAllBankLink(dispatch);
      };
      fetchBankLinks();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current); // Clear interval khi component unmount
    };
  }, [dispatch, open]);


  const filteredBanks = listBankLink?.filter(
    (bank: any) =>
      bank.name.toLowerCase().includes(search.toLowerCase()) ||
      bank.shortName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', backgroundColor: 'white', py: '12px' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
              <div className="flex items-center gap-2">
                <Image
                  src="/img/.svg/logo.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                  quality={100}
                />
                <h1 className="text-2xl pl-4 text-black font-semibold tracking-wide">
                  E-<span className="text-primary-bg-color">Study</span> Bank Link
                </h1>
              </div>
            </Typography>
            <IconButton edge="start" color="inherit" sx={{color:'black'}} onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div>
            <div className='flex gap-32 py-11 px-20'>
            <div className="w-full">
              {/* Bank Selection */}
              <div className="w-full rounded-2xl mt-5 bg-blue-100/40 shadow-md">
                <div className="py-5 px-5 bg-white flex gap-6 items-center">
                  {selectedBank ? (
                    <>
                      <div className="rounded-2xl w-16 h-16 p-2 bg-slate-100 border shadow-lg">
                        <Image
                          src={selectedBank.logo}
                          alt={selectedBank.name}
                          width={100}
                          height={100}
                          quality={100}
                          className=' object-contain w-full h-full'
                        />
                      </div>
                      <p className="font-semibold text-base">{selectedBank.name}</p>
                      <button
                        className={`ml-auto px-4 py-2 text-white rounded-md duration-200 ${
                          isSubmitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                        onClick={() => !isSubmitted && setShowForm(true)}
                        disabled={isSubmitted} // Vô hiệu hóa nút khi đã submit
                      >
                        Next
                      </button>
                    </>
                  ) : (
                    <p className="text-lg font-light">Select the bank you want to link with</p>
                  )}
                </div>
  
                <div className="px-5 py-5">
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Tìm ngân hàng"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ my: 3 }}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    }}
                  />
                  <div className="w-full gap-4 grid grid-cols-5">
                    {filteredBanks?.length > 0 ? (
                        filteredBanks.map((bank: any) => (
                          <div
                          key={bank.id}
                          className={`text-center cursor-pointer p-4 bg-white rounded-md border ${
                            selectedBank?.id === bank.id ? 'border-primary-bg-color' : 'border-transparent'
                          } ${isSubmitted ? 'opacity-50 pointer-events-none' : ''}`} // Thêm CSS để vô hiệu hóa
                          onClick={() => !isSubmitted && setSelectedBank(bank)}
                        >
                          <Image
                            src={bank.logo}
                            alt={bank.short_name}
                            width={100}
                            height={30}
                            quality={100}
                          />
                        </div>
                        ))
                    ) : (
                        <p className="col-span-6 text-center text-gray-500 py-10">
                        Không có kết quả tìm kiếm
                        </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
  
            {/* Form Section */}
            {selectedBank && showForm && (
              <div className="mt-5 p-6 bg-white rounded-lg h-fit shadow-md border w-3/4 mx-auto">
                <h2 className="text-lg font-semibold mb-4 text-center">{!showOTP ?"Nhập thông tin tài khoản":"Nhập mã xác thực OTP"}</h2>
                {!showOTP ? (
                <div className='flex gap-4 flex-col w-full'>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="border mb-11 border-gray-300 bg-white text-gray-700 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
                  >
                  <option value="personal-account">Personal Account</option>
                  <option value="business-account">Business Account</option>
                  </select>
                                  
                  <TextField
                  fullWidth
                  label="Số tài khoản"
                  variant="outlined"
                  value={accountNumber}
                  onChange={(e) => handleAccountNumberChange(e.target.value)}
                  error={!!errors.accountNumber}
                  helperText={errors.accountNumber}
                  />
  
                  <TextField
                  fullWidth
                  label="Tên tài khoản"
                  variant="outlined"
                  value={accountName}
                  onChange={(e) => handleAccountNameChange(e.target.value)}
                  error={!!errors.accountName}
                  helperText={errors.accountName}
                  />
  
                  <TextField
                  fullWidth
                  label="CCCD"
                  placeholder='XXX XXX XXX XXX'
                  variant="outlined"
                  value={identity}
                  onChange={(e) => handleIdentityChange(e.target.value)}
                  error={!!errors.identity}
                  helperText={errors.identity}
                  />
  
                  <TextField
                  fullWidth
                  label="Số điện thoại"
                  variant="outlined"
                  value={mobile}
                  placeholder='XXXX XXX XXX'
                  onChange={(e) => handleMobileChange(e.target.value)}
                  error={!!errors.mobile}
                  helperText={errors.mobile}
                  />
  
                  <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                  />
                   <button
                  className="mt-4 px-4 py-2 ml-auto bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-200"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                </div>):(
               <div className="text-center">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmitOTP)} className="w-full">
                    <FormField
                      control={form.control}
                      name="pin"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <InputOTP maxLength={8} {...field}>
                              <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                              <InputOTPSlot index={6} />
                              <InputOTPSlot index={7} />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormMessage className=" m-auto" />
                        </FormItem>
                      )}
                    />
                     <p className="mt-3 block">
                      {countdown > 0
                        &&`Vui lòng nhập OTP trong ${countdown} giây`}
                    </p>
                    {resendEnabled && (
                      <p
                        className="mt-3 m-auto block px-4 py-2 cursor-pointer text-blue-500"
                        onClick={handleResend}
                      >
                        Resend OTP
                      </p>
                    )}
                    <button
                    className="mt-4 px-4 py-2 ml-auto bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-200" 
                    type="submit">Submit</button>
                  </form>
                </Form>
             </div>
                )}
              </div>
            )}
          </div>
      </div>
      </Dialog>
    </React.Fragment>
  );
};
