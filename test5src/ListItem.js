import React,{Component} from "react";
import './ListItem.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:props.item
        }

    }

    render() {
        return (
            <p className={this.state.item.done?"done-item":"item"}>
                <input type='checkbox' value={this.state.item.content} checked={this.state.item.done?true:false} onChange={this.onClickItem}/>
                {this.state.item.content}
            </p>
        )
    }

    onClickItem= () => {
        this.state.item.done = true;
        const newItem = {
            content:this.state.item.content,
            done:this.state.item.done
        };
        this.setState({item:newItem})
    }
}
/*const ListItem = (props) => {
    const item = props.item;
    if (item.done) {
        return <p className="done-item">{item.content}</p>
    }else {
        return <p className="item">{item.content}</p>
    }
}*/

export default ListItem;