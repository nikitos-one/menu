class Menu extends React.Component {
    render() {
        let menus = [
            'Home',
            'Services',
            'Portfolio',
            'Contact us'
        ]

        return (
            React.createElement('div', null)
        )
    }
}

class Link extends React.Component {

}

ReactDOM.render(
    React.createElement(
        Menu,
        null
    ),
    document.getElementById('menu')
)