import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    }

    handleChange = e => {
        let value = e.target.value
        if(e.target.name === 'age') {
            value = Number(value)
        }
        this.setState({
            ...this.state, [e.target.name]: value
        })
    }

    handleFriends = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', this.state)
            .then(res => {
                console.log(res)
                this.props.history.push('/friends')
            })
            .catch(res => console.log(res))

        this.setState({
            ...this.state,
            name: '',
            age: '',
            email: ''
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFriends}>
                    Name
                    <input 
                    name='name'
                    type='text'
                    value={this.state.name}
                    onChange={this.handleChange}/>
                    Age
                    <input 
                    name='age'
                    type='number'
                    value={this.state.age}
                    onChange={this.handleChange}/>
                    Email
                    <input 
                    name='email'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFriend