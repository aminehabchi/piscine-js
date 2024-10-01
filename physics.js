function getAcceleration(obj){
    if (def(obj.f) && def(obj.m)){
        return obj.f/obj.m
    }

    if (def(obj.Δv) && def(obj.Δt)){
        return obj.Δv/obj.Δt
    }

    if (def(obj.t) && def(obj.m)){
        return obj.t/obj.d
    }
    return "impossible"
}
def = (a) => typeof a !== "undefined"