import { Component } from "inferno";
import Td from "./Td"

const Th = ({ fields, ...props }) => fields.map(key => (
	<th>{ key }</th>
));

const TheadList = ({ fields, ...props }) => (
	<tr>
		<Th {...props} fields={fields}></Th>
	</tr>
);

const TbodyList = ({ items, ...props }) => items.map(item => (
	<tr>
		<TbodyRow {...props} row={item}></TbodyRow>
	</tr>
));



class TbodyRow extends Component {
	constructor(props) {
		super(props)
		this.state = { row: props.row}
	}

	update(key, val) {
		this.setState({ row: {...this.state.row, [key]: val} })
		this.props.onUpdate(this.state.row)
	}


	render() {
		return this.props.fields.map(key => (
			<Td
				value={this.state.row[key]}
				onUpdate={val => this.update(key, val)}></Td>
			// <td>
			// 	<span 
			// 		contenteditable={ this.state.isEditable } 
			// 		onInput={(e) => this.update(key, e.target.textContent)} 
			// 		onDblClick={(e) => this.setState({ isEditable: true })}>{ this.state.row[key] }</span>
			// 	<TdEdit
			// 		show={this.state.isEditable}
			// 		value={this.state.row[key]}></TdEdit>
			// </td>
		))
	}
}

const Table = ({ ...props }) => (
	<table class="table is-large is-striped is-narrow is-hoverable is-fullwidth">
		<thead>
			<TheadList {...props}></TheadList>
		</thead>
		<tbody>
			<TbodyList {...props}></TbodyList>
		</tbody>
	</table>
);

export default Table;
