import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

import ApiManager from '../helper/ApiManager'


export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: '',

        }
    }

    componentDidMount() {
        const { state } = this.props.location
        if (state) {
            const { post } = state;
            this.setState({
                postData: post
            })
            console.log("my Post Data", post)
        }
    }

    render() {
        return (
            <div>
                {
                    this.postForm()
                }
            </div>
        )
    }

    postForm = () => {
        const { postData } = this.state;
        return (
            <div className="container">
                <Card style={{ textAlign: 'left', padding: '30px', marginTop: '20px', marginBottom: '150px' }}>
                    <h4 style={{ marginLeft: '48%' }}>Post</h4>
                    <br />
                    Title:<div style={{ padding: '10px', background: '#eee', borderRadius: '5px' }}>
                        <h5>  {postData.title}</h5>
                    </div>



                    <br />
                    Description:  <div style={{ padding: '10px', background: '#eee', borderRadius: '5px' }}>
                        <h6> {postData.description}</h6>
                    </div>
                    <br />
                    <br />

                    {
                        postData.videoLink ?
                            <div>
                                Video is Attached
                                {/* <Player>
                                    <source src="https://www.videolinktv.com/resources/videos/#kayaking.mp4" />
                                </Player> */}
                                <div className='player-wrapper'>
                                    <ReactPlayer
                                        className='react-player'
                                        url={postData.videoLink}
                                        width='100%'
                                        height="450px"
                                        controls="true"
                                    />
                                </div>
                            </div>
                            :
                            undefined
                    }
                    <br />
                    <button
                        style={{ float: 'right' }}
                        className="btn btn-danger"
                        onClick={() => {
                            this.deletePost(postData._id)
                        }}
                    >
                        Delete
                    </button>
                    <button
                        style={{ float: 'right' }}
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push('/feeds');
                        }}
                    >
                        Back
                    </button>
                </Card>
            </div>
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
            this.props.history.push('/feeds');
        })
    }

}


