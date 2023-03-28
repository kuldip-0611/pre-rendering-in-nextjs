const { useState, useEffect } = require("react")

const Fetch_DashBoard_data = () => {
    const [isLoading, setIsloading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        async function getdashboardData() {
            const response = await fetch("http://localhost:4000/dashboard")
            const dataset =await response.json()
            console.log(dataset)
            setData(dataset[0]);
            setIsloading(false)
        }
        getdashboardData()

    }, [])
    if (isLoading) {
        return (<h2>Loading...</h2>)
    }
    else {
        return (
            <div>
                <h2>{data.likes}</h2>
            </div>
        )
    }



}

export default Fetch_DashBoard_data