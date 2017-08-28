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
    out(id){
        this.refs[id].value = '';
    }
    counts(id){
        console.log(this.props.count);
        this.props.onGetCount(id);
        console.log(this.props.count);
        this.refs[id].value = this.props.count;
    }
  render() {
    return (
        <div onLoad={ () => {
            this.props.onGetGroups();
            this.props.onGetItems('d3956052-8110-11e7-bb31-be2e44b06b34');
        }} className="row">
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
                    <p key={index}><span className="pointer" onMouseOut={this.out.bind(this, group.id)} onMouseOver={this.counts.bind(this, group.id)} onClick={this.props.onGetItems.bind(this, group.id)}>{group.name}</span><input className="inp" id={group.id} ref={group.id}/></p>
                )}
          </div>
          <div className="secondBody">
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
                            <div className="col-md-12 text-center">
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
        }
    })
)(App);
