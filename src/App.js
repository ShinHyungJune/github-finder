import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state = {
        users: [],
        loading: false
    };

    searchUsers = async (text) => {
        let clientId = process.env.GITHUB_CLIENT_ID;
        let secretId = process.env.GITHUB_CLIENT_SECRET;

        this.setState({loading: true});

        axios.get(`https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${secretId}`).then(response => {
            this.setState({users: response.data.items, loading: false});
        });
    };

    clear = () => {
        this.setState({users: []});
    };

    render() {
        const {loading, users} = this.state;

        return (
            <div className="App">
                <Navbar title="Github finder2" />
                <Search searchUsers={this.searchUsers} clear={this.clear}/>
                <Users loading={loading} users={users} />
            </div>
        );
    }
}

export default App;
