import { Component } from "inferno";
import "bulma/css/bulma.min.css"


class Table extends Component {

	rows() {
		return this.props.rows
	}

	render() {
		console.log(this.rows())
		return(
			<table class="table is-striped is-narrow is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>uno</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>dos</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Table;
