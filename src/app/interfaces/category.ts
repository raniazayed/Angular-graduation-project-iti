import {Freelancerpostjob} from'./freelancerpostjob'
export interface Category {
   categoryId:number,
    categoryName:string,
    serviceId:number,
    serviceName:string,
    freelancers: Freelancerpostjob
}
