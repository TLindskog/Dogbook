import { useState, useContext, useEffect } from "react"
import {DogContext} from './DogContext'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'dogApp.dogs'

const AddDog = () => {
    const [name, setName] =useState('')
    const [nick, setNick] =useState('')
    const [age, setAge] =useState('')
    const [bio, setBio] =useState('')
    const [friends, setFriends] =useState('')

    const [dogs, setDogs] = useContext(DogContext)
    
    useEffect(() => {
        const storedDogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedDogs)setDogs(storedDogs)
    },[])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dogs))
    },[dogs])

    const addDog = e => {
        e.preventDefault()
        setDogs(prevDogs => [...prevDogs, {name: name, nick: nick, age: age, 
        bio: bio, friends: friends,
        id: uuidv4(), present: false}])
    }
    const updateName = e =>{
        setName(e.target.value)
    }
    const updateNick = e =>{
        setNick(e.target.value)
    }
    const updateAge = e =>{
        setAge(e.target.value)
    }
    const updateBio = e =>{
        setBio(e.target.value)
    }
    const updateFriends = e =>{
        setFriends(e.target.value)
    }

    
    return(
        <>
            <div><h3>Create a profile for your dog:</h3></div>
            <form onSubmit={addDog}>
                <text>Name: </text>
                <input type="text" name="name" value={name} onChange={updateName} placeholder="Name" /><br/>
                <text>Nick: </text>
                <input type="text" name="nick" value={nick} onChange={updateNick} placeholder="Nick" /><br/>
                <text>Age: </text>
                    <select name="age" value={age} onChange={updateAge} defaultValue="Select Age">
                        <option defaultValue>Select Age</option>
                        <option value="0-1 Years">{"<"}1</option>
                        <option value="1 Years">1</option>
                        <option value="2 Years">2</option>
                        <option value="3 Years">3</option>
                        <option value="4 Years">4</option>
                        <option value="5 Years">5</option>
                        <option value="6 Years">6</option>
                        <option value="7 Years">7</option>
                        <option value="8 Years">8</option>
                        <option value="9 Years">9</option>
                        <option value="10 Years">10</option>
                        <option value="10+ Years">10{">"}</option>
                    </select><br />
                <text>Bio: </text>
                <input type="text" name="bio" value={bio} onChange={updateBio} placeholder="Bio" /><br/>
                
                <text>Friends: </text>
                <select name="friends" value={friends} onChange={updateFriends} defaultValue="Select Friends">
                    <option defaultValue>Select Friend</option>
                    {dogs.map((dog) => (
                        <option value={dog.nick}>{dog.nick}</option>
                    ))}
                </select><br />


                <button>Save Dog</button>
            </form>
        </>
    )
}
export default AddDog;