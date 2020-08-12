import { NonceProvider } from "react-select";

export const getWeekDay = (date) => {

    const weekdays = new Array(
        "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
    );
    return weekdays[date.getDay()];
}


export const get5ForecastValues = (arr) => (

    arr.map((day) => (
        {
            date: new Date(day.Date),
            temp: day.Temperature.Maximum.Value,
            unit: day.Temperature.Maximum.Unit
        }
    ))
)

export const getCurrentConditionsValues = (conditions) => {
    console.log("Parsing!!!");
    return (
        {
            name: "None",
            temp_metric: conditions.Temperature.Metric.Value,
            temp_imperial: conditions.Temperature.Imperial.Value,
            text: conditions.WeatherText
        }
    )
}

export const getAutoCompleteOptionsValues = (arr) => {
    console.log(arr);
    return (
        arr.map((location) => (
            {
                key: location.Key,
                name: location.LocalizedName
            }
        ))
    )
}
