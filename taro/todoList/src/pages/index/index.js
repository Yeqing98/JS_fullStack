import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'get up',
        'coding',
        'sleep'
      ],
      inputVal: ''
    }
  }
  config = {
    navigationBarTitleText: 'taro首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    // const { list } = this.state;
    return (
      <View className='index'>
        <View className="list_wrap">
          <Text>Todo list</Text>
          <Input className="input" type="text" value={inputVal} onInput={this.inputHandle.bind(this)} ></Input>
          <Text className="add" onClick={this.addItem.bind(this)} >添加</Text>
          {
            list.map((item, index) => {
              return <View>
                <Text>{index + 1}.{item}</Text>
                <Text className="del" onClick={this.delItem.bind(this, index)} >删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }

  addItem () {
    let { list } = this.state;
    const inputVal = this.inputVal;
    if(inputVal == '') {
      return
    } else {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal
    })
  }

  delItem (index) {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  inputHandle (e) {
    this.inputVal = e.target.value
  }
}
