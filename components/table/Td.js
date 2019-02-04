import { Component } from "inferno";
import InputEdit from "../InputEdit"

class Td extends Component {
	constructor(props) {
		super(props)
		this.state = { value: props.value, isEditable: false }
	}

	update() {
		this.props.onUpdate(this.state.value);
		this.setState({ isEditable: false });
	}

	render() {
		return (
			<td>
				
				{ this.state.isEditable ? (
					<InputEdit
						onInput={(e) => this.setState({ value:  e.target.value})} 
						onUpdate={e => this.update()}
						value={this.state.value}></InputEdit>
				) : (
					<span 
					contenteditable={ this.state.isEditable } 
					onDblClick={(e) => this.setState({ isEditable: true })}>{ this.state.value }</span>
				)}
			</td>
		)
	}
}

export default Td;