import axios from "axios";
import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/api/students", {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                this.setState({ data: response.data });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        {item.fname} {item.lname}
                    </div>
                ))}
            </div>
        );
    }
}
export default App;
