import { NewDiaryEntry, Visibility, Weather } from "./types";

const parseComment = (commentFromRequest: any): string =>{
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment')

    }
    return commentFromRequest;
}

const parseDate = (dateFromRequest: any): string=>{
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing Date')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather =>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('incorrect or missing Weather')
    }
    return weatherFromRequest
}
const parseVisibility = (visibilityFromRequest:any): Visibility=>{
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('incorrect or missing Visiblity')
    }
    return visibilityFromRequest
}

const isVisibility = (param: any): Boolean =>{
    return Object.values(Visibility).includes(param)
}
const isWeather = (param: any): Boolean=>{
    return Object.values(Weather).includes(param)

}

const isString = (string: String): boolean =>{
    return typeof string === 'string'
}
 
const isDate =(date: string): boolean =>{
    return Boolean(Date.parse(date))
}
const toNewDiaryEntry = (object:any): NewDiaryEntry =>{
    const newEntry: NewDiaryEntry={
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather:parseWeather(object.weather),
        visibility:parseVisibility(object.visibility)
    }
    return newEntry
}

export default toNewDiaryEntry;