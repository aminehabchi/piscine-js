function dogYears(name,age){
    let a=age*7/31557600 
    if (name=="earth"){
        return a.toFixed(2)
    }else if (name=="mercury"){
        a*=0.2408467
        return a.toFixed(2)
    }else if (name=="venus"){
        a*=0.61519726
        return a.toFixed(2)
    }else if (name=="mars"){
        a*=1.8808158
        return a.toFixed(2)
    }else if (name=="saturn"){
        a*=29.447498
        return age.toFixed(2)
    }else if (name=="uranus"){
        a*=84.016846
        return a.toFixed(2)
    }else if (name=="neptune"){
        a*=164.79132
        return a.toFixed(2)
    }else if (name=="jupiter"){
        a*=11.862615 
        return a.toFixed(2)
    }
}
