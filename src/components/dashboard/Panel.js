

const Panel = ({ ...props }) => (
    <div class={`dashboard-${props.main ? 'main' : 'panel'} ${props.class}`}>
        { props.children }
    </div>
)


export default Panel;
