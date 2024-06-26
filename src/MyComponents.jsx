import React, {useState} from 'react'

function MyComponents(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(2024)
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const HandleNewCar = () => {
        setCars([...cars,{year : carYear,make : carMake,model : carModel}])
    }

    const HandleYearCar = (e) => {
        setCarYear(e.target.value)
    }

    const HandleMakeCar = (e) => {
        setCarMake(e.target.value)
    }

    const HandleModelCar = (e) => {
        setCarModel(e.target.value)
    }

    const HandleremoveCar = (index) => {
        let newcars = cars.filter((_,i) => i !== index);
        setCars(newcars)
    }

    return(
        <div>
            <h1>The cars</h1>
            <input type="number" value={carYear} placeholder="Enter the year" onChange={(e) => HandleYearCar(e)} />
            <br />
            <input type="text" value={carMake} placeholder="Enter the make of the car" onChange={(e) => HandleMakeCar(e)} />
            <br />
            <input type="text" value={carModel} placeholder="Enter the model of the car" onChange={(e) => HandleModelCar(e)} />
            <br />
            <button onClick={HandleNewCar}>Add</button>
            <br />
            <h1>List of cars :</h1>
            <ul>
                {cars.map((car, index) => <li onClick={() => HandleremoveCar(index)} key={index} >{car.year} {car.model} {car.make}</li>)}    
            </ul>            
        </div>
    );

}

export default MyComponents