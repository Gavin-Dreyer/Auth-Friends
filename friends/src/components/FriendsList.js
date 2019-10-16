import React from 'react'
import Loader from 'react-loader-spinner'

import { axiosWithAuth } from '../utils/axiosWithAuth'

class FriendsList extends React.Component {
    state = {
        friends: [],
        isFetching: false
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        this.setState({...this.state, isFetching: true})
        axiosWithAuth()
            .get('/api/friends')
            .then(res => this.setState({friends: res.data, isFetching: false}))
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <p>{this.state.isFetching ? <Loader
                    type="Rings"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    

                /> : ''}</p>
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