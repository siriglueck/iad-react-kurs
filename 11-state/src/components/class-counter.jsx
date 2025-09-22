import { Component } from "react"

// Legacy Class based Component
export class ClassCounter extends Component {

    state = {
        count: 0
    }

    // Object Instanz
    //count = 0;

    // Object Method
    inc() {
        // Falsch(!)
        // Do not mutate state! Die state-Eigenschaft ist für dich READ-ONLY    
        // ++this.state.count;

        // Richtig: Setze neuen State mit setState
        // .setState is React method to new render this
        this.setState({ count: this.state.count + 1});

        console.log(this.state.count); // Alter State
        // IF YOU EVER WILL USE THIS METHOD YOU WILL BE FIRED
        // this.forceUpdate();
    }

    render() {

        console.log('Rendering ClassCounter');

        return <div>
            {this.props.label}: {this.state.count}
            <br />
            <button onClick={() => this.inc()}>Increment</button>
        </div>
    }
}