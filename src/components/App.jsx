import { Component } from 'react';
import { v4 } from 'uuid';
import { AddColorFormFunc } from './AddColorFormFunc';
import { ColorList } from './ColorList';
import '../styles/App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { colors: [] };
        this.addItem = this.addItem.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id)
                ? color
                : { ...color, rating }
        );
        this.setState({ colors });
    }

    removeColor(id) {
        const colors = this.state.colors.filter(color =>
            color.id !== id
        );
        this.setState({ colors });
    }

    addItem = (title, color) => {
        const colors = [...this.state.colors,
        {
            id: v4(),
            title,
            color,
            rating: 0
        }];
        this.setState({ colors });
        console.log(`title: ${title}, color: ${color}`);
        console.log(colors);
    }

    render() {
        const { addItem, rateColor, removeColor } = this;
        const { colors } = this.state;
        return (
            <div className='App'>
                <AddColorFormFunc onNewColor={addItem} />
                <ColorList
                    colors={colors}
                    onRate={rateColor}
                    onRemove={removeColor} />
            </div>
        );
    }
}


export default App;
