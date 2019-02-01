import { Component } from "inferno";

const TdEdit = ({ ...props }) => props.show ? (
	<div class="field has-addons">
		<div class="control">
			<input class="input" type="text" value={props.value} onInput={props.onInput} />
		</div>
		<div class="control">
			<button class="button is-success" onClick={props.onUpdate}>
				<span class="icon is-small"><i class="fa fa-check"></i></span>
			</button>
		</div>
	</div>
) : '';

class Td extends Component {
	constructor(props) {
		super(props)
		this.state = { value: props.value, isEditable: false }
	}

	render() {
		return (
			<td>
				<span 
					contenteditable={ this.state.isEditable } 
					onDblClick={(e) => this.setState({ isEditable: true })}>{ this.state.value }</span>
				<TdEdit
					show={this.state.isEditable}
					onInput={(e) => this.setState({ value:  e.target.value})} 
					onUpdate={e => this.props.onUpdate(this.state.value)}
					value={this.state.value}></TdEdit>
			</td>
		)
	}
}

export default Td;