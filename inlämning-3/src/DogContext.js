import { useState, createContext } from "react"
import { v4 as uuidv4 } from 'uuid';


export const DogContext = createContext()


export const DogProvider = (props) => {
    const [dogs, setDogs] = useState([
        {name: 'DogNameOne', nick: 'DogNickOne', age: "1", bio: 'bioOne', friends: 'friendOne',
         id: uuidv4(), present: false},
        {name: 'DogNameTwo', nick: 'DogNickTwo', age: "2", bio: 'bioTwo', friends: 'friendTwo',
         id: uuidv4(), present: false},
        {name: 'DogNameThree', nick: 'DogNickThree', age: "3", bio: 'bioThree', friends: 'friendThree',
         id: uuidv4(), present: false}
    
        ])
    return(
        <DogContext.Provider value ={[dogs, setDogs]}>
            {props.children}
        </DogContext.Provider>
    )

}