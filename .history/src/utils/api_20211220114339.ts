export const getAllSurahsFfromApi = async () => {
  return await fetch("https://api.alquran.cloud/v1/surah")
    .then((res: any) => res.data.data)
    .catch((e: any) => alert(e.message));
};

