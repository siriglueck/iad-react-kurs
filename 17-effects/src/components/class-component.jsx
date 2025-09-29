import { Component } from 'react';

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('Create Instance ClassComponent');
  }

  state = {
    count: 0,
  };

  componentDidCatch() {
    // comparing to catach and throw in JS
    console.log('Exception in Child Component');
  }

  componentDidMount() {
    console.log('Mounted Class Component. After initial render and painting');
    // console.log(document.getElementById('demo'));
    // only happen after creating the DOM?
  }

  shouldComponentUpdate() {
    console.log('ShouldUpdate Class component. Before further render');
    return true;
  }

  componentDidUpdate() {
    console.log('Updated Class Component. After futher render and painting');
    console.log(document.getElementById('btn'));
  }

  componentWillUnmount() {
    console.log('Will Unmount Class component. Before removing from DOM and releasing the instance');
  }

  render() {
    console.log('Rendering ClassComponent');
    return (
      <div>
        <h2 id="demo">I am a Class Component</h2>
        <button id="btn" onClick={() => this.setState({ count: this.state.count + 1 })}>
          Class counter
          {` ${this.state.count}`}
        </button>
      </div>
    );
  }
}
