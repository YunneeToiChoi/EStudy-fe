import * as request from "@/lib/utils/request";
import {
    getAllPlanStart,
    getAllPlanSuccess,
    getAllPlanFailed,
} from "@/service/reduxState/plansSlices"

 export const getAllPlans = async (userId:string,dispatch:any) => {
    dispatch(getAllPlanStart());
    try {
      const res = await request.post('SubscriptionPlan_API/Get_AllPlans',{userId:userId});
      dispatch(getAllPlanSuccess(res));
    } catch (err:any) {
      dispatch(getAllPlanFailed(err.response.data));
    }
 }