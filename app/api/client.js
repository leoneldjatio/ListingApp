import {create} from 'apisauce';
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
baseURL:"http://192.168.100.168:9000/api"
});

apiClient.addAsyncRequestTransform(async(request) =>{
    const authToken = await authStorage.getToken();
    if(!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url,params,axiosConfig)=>{
  
    const response = await get(url,params,axiosConfig);

    if (response.ok){
        cache.storeDataInCache(url,response.data);
        return response;
    }

    const data = await cache.getDataFromCache(url);
    return data ? {ok:true,data}:response;
  
}

export default apiClient;