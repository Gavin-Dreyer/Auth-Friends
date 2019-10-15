import React from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.friends.map(item => (
                    <div className='data' key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.age}</p>
                        <p>{item.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList