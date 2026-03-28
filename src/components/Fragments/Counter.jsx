import React from "react";

class Counter extends React.Component {
    // Pendefinisian State
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log("Constructor");
    }

    componentDidMount() {
        this.setState({count: 1});
        console.log("Component Did Mount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update");
        // Component did update memerlukan pengecekan kondisi untuk mencegah infinite loop
        if(this.state.count === 10) {
            this.setState({count: 0});
        }
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    render() {
        return (
            <div className="flex items-center">
                <h1 className="mr-5">{this.state.count}</h1>
                <button 
                    className="bg-black text-white p-3" 
                    onClick={() => this.setState({count: this.state.count + 1})}
                >
                    +
                </button>
                {console.log("Render")}
            </div>
        )
    }
}

export default Counter;

// Class Component memiliki lifecycle yang terdiri dari beberapa fase, yaitu Mounting, Updating, dan Unmounting. Pada fase Mounting, terdapat metode constructor() yang digunakan untuk inisialisasi state dan binding method, serta componentDidMount() yang dipanggil setelah komponen dirender untuk pertama kalinya. Pada fase Updating, terdapat metode componentDidUpdate() yang dipanggil setelah komponen diperbarui. Pada fase Unmounting, terdapat metode componentWillUnmount() yang dipanggil sebelum komponen dihapus dari DOM. Lifecycle ini memungkinkan kita untuk mengelola state dan efek samping dengan lebih terstruktur dalam class component.