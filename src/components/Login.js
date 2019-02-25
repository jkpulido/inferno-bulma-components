import { Component } from "inferno";
import '../sass/login.sass'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = { email: '', password: '' }
	}

	render() {
		return (
		    <div class={`login ${this.props.class}`}>
		        <figure class="avatar">
		            <img src="https://placehold.it/128x128" />
		        </figure>
		        <form>
		            <div class="field">
		                <div class="control">
		                    <input value={this.state.email} class="input is-large" type="email" 
		                    	onInput={e => this.setState({ email: e.target.value })}
		                    	placeholder="Correo" autofocus="" />
		                </div>
		            </div>
		            <div class="field">
		                <div class="control">
		                    <input value={this.state.password} class="input is-large" type="password" 
		                    	onInput={e => this.setState({ password: e.target.value })}
		                    	placeholder="Contraseña" />
		                </div>
		            </div>
		            <button class="button is-block is-info is-large is-fullwidth" onClick={ () => this.props.onLogin(this.state.email, this.state.password) }>Ingresar</button>
		        </form>
		    </div>
		)
	}
}



export default Login;
