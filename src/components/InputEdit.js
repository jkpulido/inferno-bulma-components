const InputEdit = ({ ...props }) => (
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
);


export default InputEdit;