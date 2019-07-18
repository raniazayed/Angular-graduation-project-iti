import { AdminServices } from './admin-services';

// import {adminServices} from './adminServices'
export interface Statistics {
    totalCustomers:number,
    totalFreelancers:number,
    customersToFreelancers:number,
    freelancersToCustomers:number,
    services: AdminServices[]
}

