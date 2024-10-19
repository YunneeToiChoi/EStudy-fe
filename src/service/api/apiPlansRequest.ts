import * as request from "@/lib/utils/request";
import {
    getAllPlanStart,
    getAllPlanSuccess,
    getAllPlanFailed,
    getUserPlanStart,
    getUserPlanSuccess,
    getUserPlanFailed,
    checkExpirePlanStart,
    checkExpirePlanSuccess,
    checkExpirePlanFailed,
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

 export const getUserPlans = async (data:any,dispatch:any) => {
  dispatch(getUserPlanStart());
  try {
    const res = await request.post('/UserSubs_API/Get_PlanFromUser',data);
    dispatch(getUserPlanSuccess(res));
  } catch (err:any) {
    dispatch(getUserPlanFailed(err.response.data));
  }
}

export const checkExpirePlan = async (data:any, dispatch:any) => {
  dispatch(checkExpirePlanStart());
  try {
    const res = await request.post('/UserSubs_API/Check_Expire',data);
    dispatch(checkExpirePlanSuccess(res));
  } catch (err:any) {
    dispatch(checkExpirePlanFailed(err.response.data));
  }
}