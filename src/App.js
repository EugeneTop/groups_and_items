import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import pg from './pg.jpg';
import logo from './Untitled-1.png';
import { getGroups } from './action/groups';
import { getItems } from "./action/items";
import { getCount } from "./action/count";
import { getInfoItem } from "./action/infoItem";

class App extends Component {

    componentWillMount() {
        this.props.onGetGroups();

        if(localStorage.getItem('myDate') === null){
            localStorage.setItem('myDate', 'd3956052-8110-11e7-bb31-be2e44b06b34');
        }

        this.props.onGetItems(localStorage.getItem('myDate'));

        setTimeout(() => {
            this.props.groups.map((group) => {
                this.props.onGetCount(group.id);
            });
        } , 1000);
        setTimeout(() => {
           this.props.count.map((count) => {
               this.refs[count.name].value = count.length;
           })
        }, 1400);
    }

    render() {
        return (
            <div className="container-fluid main_div">
                <div className="App1">
                    <div className="col-md-1">
                        <img id="img1" src={logo} alt=""/>
                    </div>
                    <div className="col-md-4 text-left">
                        <h4 className="list">Item collection list</h4>
                    </div>
                </div>
                <div className="col-md-3 body">
                    {
                        this.props.groups.map((group, index) =>
                            <p key={index}><span className="pointer" onClick={() => {
                                this.props.onGetItems(group.id);
                                localStorage.setItem('myDate', group.id);
                            } }>{group.name}</span><input className="inp" id='count' ref={group.id}/></p>
                        )}
                </div>
                <div className="second col-md-9">
                    {
                        this.props.items.map((item, index) =>
                            <div className="col-md-12 title" key={index}><span className="itemTitle col-md-3  text-center" data-toggle="modal" data-target="#myModalBox" onClick={this.props.onGetInfoItems.bind(this, item.id)}>{item.title}</span><span className="col-md-4  text-center">{item.data}</span><span className="col-md-3  text-center">{item.subtitle}</span></div>
                        )}
                </div>
                <div id="myModalBox" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="col-md-7">
                                    <img id="img" src={pg} alt=""/>
                                </div>
                                <div className="col-md-5">
                                    <p className="p">{this.props.infoItem.name}</p>
                                    <p className="p">{this.props.infoItem.subtitle}</p>
                                    <p className="p">{this.props.infoItem.date}</p>
                                </div>
                                <div className="col-md-12">
                                    <p>{this.props.infoItem.description}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div className="text-center">
                                    <button id="btns" data-dismiss="modal" aria-hidden="true">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        groups: state.groups,
        items: state.items,
        infoItem: state.infoItem,
        count: state.count
    }),
    dispatch => ({
        onGetGroups: () => {
            dispatch(getGroups());
        },
        onGetItems: (idI) => {
            const itemId = idI;
            dispatch(getItems(itemId));
        },
        onGetCount: (Iid) => {
            const itemId = Iid;
            dispatch(getCount(itemId));
        },
        onGetInfoItems: (Iid) => {
            const itemId = Iid;
            dispatch(getInfoItem(itemId));
        },
    })
)(App);