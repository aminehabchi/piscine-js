function dogYears(name,age){
    age=age*7/31557600 
    if (name=="earth"){
        return age.toFixed(2)
    }else if (name=="mercury"){
        age*=0.2408467
        return age.toFixed(2)
    }else if (name=="venus"){
        age*=0.61519726
        return age.toFixed(2)
    }else if (name=="mars"){
        age*=1.8808158
        return age.toFixed(2)
    }else if (name=="saturn"){
        age*=29.447498
        return age.toFixed(2)
    }else if (name=="uranus"){
        age*=84.016846
        return age.toFixed(2)
    }else if (name=="neptune"){
        age*=164.79132
        return age.toFixed(2)
    }else if (name=="jupiter"){
        age*=11.862615 
        return age.toFixed(2)
    }
}
