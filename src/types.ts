export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Storm = 'stormy'
}

export enum Visibility{
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    poor = 'poor'
}


export interface DiaryEntry {
    id:number,
    date : string,
    weather : Weather,
    visibility: Visibility,
    comment: string
}

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' 
//| 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>