import { Component } from "inferno";

const styleItem = {
    background: '#E5E9EC',
    padding: '20px'
}

const Item = ({ item, ...props }) => (
    <div class="column is-one-fifth has-text-centered">
        <div style={{ ...styleItem, ...props.style  }} onClick={ () => props.onClick(item) }>
            <figure class="image is-inline-block is-64x64">
                <img src={ item.image } />
            </figure>
            <p class="title is-5">{ item.title }</p>
            <p class="subtitle is-6">{ item.description }</p>
        </div>
    </div>
)

const List = ({ items, ...props }) => items.map(item => (
    <Item {...props} item={ item }></Item>
));

const GridList = ({ ...props }) => (
    <div class="columns is-multiline is-tablet">
        <List {...props}></List>
    </div>
)


export default GridList;
