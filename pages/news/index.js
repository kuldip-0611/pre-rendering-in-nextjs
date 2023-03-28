const News= ({news})=>{
    return(
        <>
        <h1>News List</h1>

        {
            news.map(Individual_news=>{
                return(
                    <div key={Individual_news.id}>
                        <h2>{Individual_news.id} {Individual_news.name} {Individual_news.category}</h2>
                        
                    </div>
            )})
        }
        </>
    )
}
export default News;

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return{
        props:{
            news:data
        }
    }
}