import { useEffect, useState } from "react"

export const Counter = (props) => {

    const [counter, setCounter] = useState(0)




    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(counter + 1)
        }, 100)

        return () => clearInterval(intervalId)

    }, [counter])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex counterclass">
                        <div><i className="far fa-clock"></i></div>
                        <div>{Math.floor((counter / 1000) % 10)}</div>
                        <div>{Math.floor((counter / 100) % 10)}</div>
                        <div>{Math.floor((counter / 10) % 10)}</div>
                        <div>{Math.floor((counter / 1) % 10)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}