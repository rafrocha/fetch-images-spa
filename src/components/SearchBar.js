import React, { Component } from "react";

export default class SearchBar extends Component {
    state = {
        term: ""
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            onChange={e =>
                                this.setState({ term: e.target.value })
                            }
                            value={this.state.term}
                            type="text"
                        />
                    </div>
                </form>
            </div>
        );
    }
}
