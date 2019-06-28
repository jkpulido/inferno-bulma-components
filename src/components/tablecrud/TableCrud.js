import { Component } from "inferno";
import Td from "../table/Td"

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
		this.props.onUpdate && this.props.onUpdate(this.state.row)
	}


	render() {
		return this.props.fields.map(key => (
			<Td
				value={this.state.row[key]}
				onUpdate={val => this.update(key, val)}></Td>
		))
	}
}

const Table = ({ ...props }) => (
    <div class="container">
        <nav class="pagination" role="navigation" aria-label="pagination">
            <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
            <a class="pagination-next">Next page</a>
            <ul class="pagination-list">
                <li>
                <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
                </li>
                <li>
                <a class="pagination-link" aria-label="Goto page 2">2</a>
                </li>
                <li>
                <a class="pagination-link" aria-label="Goto page 3">3</a>
                </li>
            </ul>
        </nav>
        <table class="table is-large is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <TheadList {...props}></TheadList>
            </thead>
            <tbody>
                <TbodyList {...props}></TbodyList>
            </tbody>
        </table>
    </div>
);

export default Table;
