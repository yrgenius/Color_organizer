import '../styles/AddColorFormFunc.css';

const AddColorFormFunc = ({ onNewColor = f => f }) => {
    let _title, _color;

    const submit = (e) => {
        e.preventDefault();

        // Поскольку ссылки сохранены в локальных переменных,
        // к ним будет легко получить доступ при отправке данных формы.
        onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#333333';
        _title.focus();
    }

    return (
        <form className='color-form' onSubmit={submit}>
            {/* В данном компоненте ссылки вместо строковых значений устанавливаются с помощью функции обратного вызова. 
            Она передает экземпляр элемента в качестве аргумента. Этот экземпляр может быть взят и сохранен в локальной переменной
            вида _title или _color. Поскольку ссылки сохранены в локальных переменных,
            к ним будет легко получить доступ при отправке данных формы. */}
            <input ref={input => _title = input} type="text" required />
            <input ref={input => _color = input} type="color" required />
            <button>ADD</button>
        </form>
    )
}

export { AddColorFormFunc }