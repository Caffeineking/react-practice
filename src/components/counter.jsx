import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // render means at some point in the future, the element below will be return
    render() {
        // console.log(this.props)
        return (
            <div>
                {/* {this.props.children} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }

    getBadgeClasses() {

        let classes = "badge m-2 badge-";
        // if it equals 0 then display warning , else display primary
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        //  were picking the count property ont his object and were storing it in a seperate constant
        //  called count.
        const { count } = this.state;
        // if count is 0, this displays Zero as text
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;