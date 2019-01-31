import { Component } from "inferno";
import "bulma/css/bulma.min.css"

// model initial state 
const model = () => {

}


// update: update state
const update = () => {
    
}


// view: HTML
const render = () => {

}

class GridList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.build
    }

	items() {
		const items = this.props.items.map((item) => {
            return (
                <div class="column is-one-fifth">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/256x256.png" />
                    </figure>
                    <p class="">{ item.title }</p>
                </div>
            );
        })

	}

	render() {
		
		return(
			<div class="columns is-multiline is-tablet">
                { items }
            </div>
		);
	}
}

export default GridList;
