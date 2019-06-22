import React from 'react';
import { Input, Button, Divider } from 'antd'
function Filed(props) {
    const { value,index } = props;
    return (
        <div>
            <Divider/>
            <div>
                姓名：<Input value={value.name} placeholder="姓名" onChange={(e) => {
                    props.onChange(e.target.value, 'name', index)
                }} />
            </div>
            <div>
                地址：<Input value={value.address} placeholder="地址" onChange={(e) => {
                    props.onChange(e.target.value, 'address', index)
                }} />
            </div>
            <Button type="primary" onClick={() => {
                   props.onDelete(index)
            }} >删除</Button>
            <Button type="primary" onClick={() => {
                props.onAdd()
            }} >添加</Button>
        </div>
    )
}

class DynamicField extends React.Component{
    state = {
        lists: [
            {
                name: '',
                address: ''
            }
        ]
    }
    handleChange = (value, key, i) => {
        let lists = this.state.lists.slice(0);
        const obj = lists[i];
        const newObj = {
            ...obj,
            [key]: value
        }
        lists[i] = newObj;
        this.setState({
            lists
        })
    }
    handleDelete = (i) => {
        let lists = this.state.lists.slice(0);
        lists.splice(i, 1);
        this.setState({
            lists
        })
    }
    handleAddFile = () => {
        let lists = this.state.lists.slice(0);
        lists.push({
            name: '',
            address: ''
        })
        this.setState({
            lists
        })
    }
    render() {
        const { lists } = this.state;
        console.log(this.state);
        return(
            <div>
                {
                    lists.map((list, i) => {
                        return <Filed key={i} 
                        value={list} 
                        onChange={this.handleChange} 
                        onDelete={this.handleDelete} 
                        onAdd={this.handleAddFile}
                        index={i} />
                    })
                }
            </div>
        )
    }
}

export default DynamicField;