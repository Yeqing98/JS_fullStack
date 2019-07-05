import React from 'react';

class ShowList extends React.Component {
    state = {}
    // handleShow = (e) => {
    //     console.log(e)
    // }
    render() {
        // console.log("ASD", this.props)
        const { currentList } = this.props;
        console.log("asdf" ,currentList);
        
        return (
            <div>
                {
                    currentList.map((item, index) => {
                        return (
                            <div key={index} onClick={() => {
                                console.log(index)
                                this.props.showOneList(index)
                            }} 
                            style={{textDecoration: item.show ? '' : 'line-through'}} >
                                { item.title }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ShowList;