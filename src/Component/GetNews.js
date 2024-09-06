export default async function GetNews(NewsType) {
    let URL=`https://newsdata.io/api/1/latest?apikey=pub_52719165cc0b64c54216d143bece92406a842&q=${NewsType}`
    let response = await fetch(URL)
    response= await response.json();
    return response;    
}
