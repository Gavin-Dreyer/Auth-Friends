import React from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }


    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token',res.data.payload)
                this.props.history.push('/friends')
                console.log(this.props)
            })
            .catch(err => console.log(err))
    }

    render () {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                type='text'
                name='username'
                value={this.state.credentials.username}
                onChange={this.changeHandler} />
                <input
                type='password'
                name='password'
                value={this.state.credentials.password}
                onChange={this.changeHandler} />
                <button>Submit</button>
            </form>
        )
    }
}

export default Login