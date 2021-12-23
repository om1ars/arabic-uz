export const getAllSurahsFfromApi = async() => {
    return fetch('https://api.alquran.cloud/v1/surah').then(res => res.data.data)
}