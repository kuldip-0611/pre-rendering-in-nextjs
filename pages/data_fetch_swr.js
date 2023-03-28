import useSWR from 'swr' 

const fetcher = async ()=>{
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    console.log(data)
    return data


}
const dashBoard_swr = ()=>{
    const {data,error}= useSWR('dashboard',fetcher)
    if(error) return 'An error occurred'
    if(!data) return 'Loading'

    return (
        <div>
            <h2>{data[0].likes}</h2>
        </div>
    )

}
export default dashBoard_swr