import React, {Component} from 'react';

class Search extends Component {
    state = {
        text: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    submit = (e) => {
        e.preventDefault();

        this.props.searchUsers(this.state.text);

        this.setState({text: ''});
    };

    clear = (e) => {
        this.props.clear();
    };

    render() {
        return (
            <div>
                <form action="" className="form" onSubmit={this.submit}>
                    <input type="text" name="text" placeholder="Search Users.." value={this.state.text}
                           onChange={this.onChange}
                           />

                    <button type="submit" value="Search" className="btn">Search</button>
                    <button type="button" className="btn" onClick={this.clear}>Clear</button>
                </form>
            </div>
        );
    }
}

export default Search;