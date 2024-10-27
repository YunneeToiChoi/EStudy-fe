import { PopupPurchase } from "./popupMethod"
export default function PaymentMethodLayout(){
    return(
        <div>
            <h1 className=" font-medium">Payment method</h1>
            <p className=" text-slate-500 text-sm mt-2">Add your preferred payment method for future purchases</p>
            <div className=" text-center py-11 w-full text-sm font-light text-slate-400 border-2 border-dashed border-slate-400 rounded-2xl mt-6">
            No payment method provided
            <PopupPurchase />
            </div>
        </div>
    )
}