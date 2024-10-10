function hasCity(country,arr){
    return function func(city){
        return arr.some((element)=>{
            if (element===city){
                return city +' is a city from '+country
            }
            return city +' is not a city from '+country
        })
    }
}
