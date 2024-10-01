function getAcceleration(obj){
   
   if (nan(obj.f/obj.m)==false){
    return obj.f/obj.m;
   }
    

   if (nan(obj.Δv/obj.Δt)==false){
    return obj.Δv/obj.Δt;
   }
    

  
   if (nan(2*obj.d/(obj.t*obj.t))==false){
    return 2*obj.d/(obj.t*obj.t);
   }

    
    return "impossible"
}
const nan = (a) => Number.isNaN(a)
//console.log(getAcceleration({ d: 10, t: 2, Δv: 100 }))