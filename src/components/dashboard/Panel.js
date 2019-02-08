

const Panel = ({ ...props }) => (
    <div class={`dashboard-${props.main ? 'main is-scrollable' : 'panel is-one-quarter'} ${props.class}`}>
        { props.children }
    </div>
)


export default Panel;
