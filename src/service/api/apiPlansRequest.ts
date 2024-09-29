import * as request from "@/lib/utils/request";
import {
    getAllPlanStart,
    getAllPlanSuccess,
    getAllPlanFailed,
} from "@/service/reduxState/plansSlices"

 export const getAllPlans = async (dispatch:any) => {
    dispatch(getAllPlanStart());
    try {
      const res = await request.get('SubscriptionPlan_API/Get_AllPlans');
      dispatch(getAllPlanSuccess(res));
    } catch (err:any) {
      dispatch(getAllPlanFailed(err.response.data));
    }
 }