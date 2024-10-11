export default async function GetNews(NewsType) {
    let URL=`https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_NEWS_API+NewsType}`
    let response = await fetch(URL)
    response= await response.json();
    return response;    
}
