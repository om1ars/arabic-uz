export const getAllSurahsFfromApi = async():any => {
    return fetch('https://api.alquran.cloud/v1/surah').then(res => res.data.data)
}