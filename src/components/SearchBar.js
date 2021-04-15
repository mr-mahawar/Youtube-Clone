import React from "react";

class SearchBar extends React.Component {
    state = { searchTerm: '' }

    onSearchInput = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input
                        type="text"
                        placeholder="Search Video"
                        value={this.state.searchTerm}
                        onChange={this.onSearchInput}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;