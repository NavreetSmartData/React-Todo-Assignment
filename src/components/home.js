import React from 'react';
import PropTypes from "prop-types";
// import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
import List from '../components/list';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Todo Demo App',
            value: '',
            button: 'Add',
            list:[],
            index:''
        };
       this.delete = this.delete.bind(this);
       this.onSave = this.onSave.bind(this);
       this.edit = this.edit.bind(this);

    }

    onSave(){
        const list = this.state.list;
        if(this.state.button == "Add"){
       list.push(this.refs.demo.value);
        this.setState({list});
        this.refs.demo.value = '';
        }
        else{
        list[this.state.index] = this.refs.demo.value;
            this.state.index='';
            this.refs.demo.value = '';
            this.setState({list});
            this.setState({button : 'Add'});
        }
    }
    delete(i){
        const list = this.state.list;
        list.splice(i,1);
        this.setState({list});

        console.log(this.state.list,'test');
    }
    edit(i,value){
        this.refs.demo.value = value;
        this.setState({button : "Update"});
        this.state.index=i;
        // const items = this.state.lists;
        // items[i] = value;
        // this.setState({lists: items});

        // console.log(this.state.list,'test');
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 width">
                        <h1>{this.state.name}</h1>
                        <input 
                            type="text"
                            ref="demo"
                            //onChange={(event) =>  this.setState({value: event.target.value })}
                            //value={this.state.value}
                            />
                            <button onClick={this.onSave}>{this.state.button}</button>
                            <br/>
                            <List 
                                list={this.state.list} 
                                _delete={this.delete}
                                _edit={this.edit}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) =>
    ({
    });

const mapDispatchToProps = (dispatch) => ({
});

export default Home;
