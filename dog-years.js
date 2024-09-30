function dogYears(name,age){
    var y =age*7/31557600 
    planet={
        earth:y,
        mercury:y*0.2408467,
        venus:y*0.61519726,
        mars:y*1.8808158,
        jupiter:y*11.862615,
        saturn:y*29.447498,
        uranus:y*84.016846,
        neptune:y*164.79132,
    }
    return Number(planet[name].toFixed(2));
}
//console.log(dogYears('earth', 1000000000))