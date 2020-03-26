import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ApiManager from '../helper/ApiManager'
import Spinner from '../helper/Spinner'


export default class Feeds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [],
            errorMsg: '',
            isLoading: true,
            postByIdData: "",
            msg: "",

        }
        // const classes = useStyles();

        this.gettingPosts()
    }


    render() {
        return (
            <div className="container" >

                <div style={{
                    marginTop: '50px',
                    marginBottom: '150px',
                    width: '70%',
                    marginLeft: '15%'
                }}>
                    <h5>Posts</h5>

                    {this.state.isLoading ?
                        <Spinner />
                        :
                        undefined
                    }

                    {this.state.msg}

                    {this.state.postList && this.state.postList.map((item, i) => {

                        return (
                            <List
                                // className={this.classes.root}
                                key={i}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="A" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    // className={this.classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Title: {item.title}
                                                </Typography>
                                                {
                                                    item.videLink ?
                                                        <div>Video is Attached</div>
                                                        :
                                                        undefined
                                                }
                                                <div
                                                    style={{ float: "right" }}
                                                    className="btn-group mr-2"
                                                    role="group"
                                                    aria-label="First group">

                                                    <button
                                                        className="btn btn-light"
                                                        onClick={() => {
                                                            this.props.history.push('/post', {
                                                                post: item
                                                            })
                                                        }} >
                                                        <i className="fa fa-eye"></i>
                                                    </button>

                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => {
                                                            this.deletePost(item)
                                                        }}
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </div>


                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" /></List>
                        )
                    })
                    }

                </div>
            </div>
        );
    }



    gettingPosts = () => {
        return (
            new ApiManager().getPostList().then(result => {
                if (result.no_result) {
                    return
                }
                if (result.error) {
                    return
                }
                if (result) {
                    if (result.data) {
                        if (result.data.posts) {
                            console.log("resultttttt>>", result.data.posts)
                            this.setState({
                                isLoading: false,
                                postList: result.data.posts
                            })
                            if (this.state.postList.length < 1) {
                                this.setState({
                                    msg: "No Post Created yet..."
                                })
                            }
                        } else {
                            this.setState({
                                errorMsg: "Post list is empty..."
                            })
                        }

                    } else {
                        this.setState({
                            errorMsg: "Post list is empty..."
                        })
                    }
                } else {
                    this.setState({
                        errorMsg: "Check your network..."
                    })
                }
            })
        )
    }

    deletePost = (id) => {
        this.setState({
            isLoading: true
        })
        new ApiManager().deletePost(id).then(result => {
            if (result.no_result) {
                return
            }

            if (result.error) {
                alert(result.error)
                return
            }
            this.setState({
                isLoading: false
            })
            console.log("Post is deleted!!!!! with id>>>", id)
            this.gettingPosts()
        })
    }



}
