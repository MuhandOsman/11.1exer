import React,{useEffect , useState} from 'react'
import MyContext from './MyContext'


const MyProvider = (props) => {

    const [categories, setCategories]= useState([])
    const [select, setSelect]= useState("")
    const [joke, setJoke]= useState("")



    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://api.chucknorris.io/jokes/categories")
                const data = await response.json()
                setCategories(data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()    
    },[])

    const url = "https://api.chucknorris.io/jokes/random?category="

        const getJoke = () => {

            const getData = async () => {
                try {
                    const response = await fetch(`${url}${select}`)
                    const data = await response.json()
                    setJoke(data.value)
                } catch (error) {
                    console.log(error);
                }
            }
            getData()    

        }
   
    
    



    return (
        <MyContext.Provider value={{categories,select, setSelect,joke, getJoke}} >
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider
