const API = "https://www.themealdb.com/api/json/v1/1"
export async function fetchMeal(name = ""){
    try{
        const res = await fetch(`${API}/search.php?s=${name}`)
        if(!res.ok) throw new Error("Gagal ambil API")
        const data = await res.json()
        return data.meals || []
    }catch (err){
        console.log("API nya error nih...",err.message)
        throw err
    }
}
