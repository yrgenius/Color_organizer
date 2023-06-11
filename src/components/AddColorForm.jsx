import React from 'react';

class AddColorForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.title = React.createRef();
        this.color = React.createRef();
    }

    submit(e) {
        e.preventDefault();

        // Чтобы сделать двустороннюю привязку данных необязательной, перед попыткой вызова функционального свойства 
        // нужно проверить факт его существования. Если функциональное свойство onNewColor не предоставить, 
        // то это приведет к ошибке JavaScript, 
        // поскольку компонент будет пытаться вызвать неопределенное значение
        if (!this.props.onNewColor) return;

        this.props.onNewColor(this.title.current.value, this.color.current.value);
        this.title.current.value = '';
        this.color.current.value = '#000000';
        this.title.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref={this.title} type='text' placeholder='color title...' required />
                <input ref={this.color} type='color' required />
                <button>ADD</button>
            </form>
        );
    }
}

export { AddColorForm }