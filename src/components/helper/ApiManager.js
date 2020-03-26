import axios from 'axios';

export default class ApiManager {

    // LocalHost
    _BASE_URL = "http://localhost:4000/api/"

    // FEEDBACK
    _ADD_POST = "post/add"
    _GET_POST_LIST = "post/get"
    _DELETE_POST = "post/delete"
    _GET_POST_BY_ID = "post/get"
    _CHECK_AUTH = "admin/checkauth"

    async sendGetRequest(_url, _params, _headers) {
        _url = this._BASE_URL + _url;
        console.log("API _url", _url)

        if (!_headers) {
            _headers = {
                'Content-Type': 'application/json',
            }
        }

        try {
            let response = await axios.get(_url, {
                data: _params ? _params : null,
                headers: _headers,
                timeout: 15000
            });

            console.log("API call response", response)
            return response;

        } catch (error) {
            let err = [];
            err.error = error;
            err.no_result = true;
            // console.log("catch error on ", _url, " call fail", err)
            setTimeout(() => {
                alert("Unable to connect with server")
            }, 400)
            return err;
        }
    }

    async sendPostRequest(_url, _params, headers) {
        _url = this._BASE_URL + _url;
        console.log("API _url", _url)
        // console.log("my jwt token>>>>>>.", headers)

        if (!_params) {
            _params = {}
        }
        if (!headers) {
            headers = {
                'Content-Type': 'application/json',
            }
        }

        try {
            let response = await axios({
                method: 'post',
                url: _url,
                headers: headers,
                data: _params,
                timeout: 50000
            });
            console.log("API call response", response)
            return response;

        } catch (error) {
            let err = [];
            err.error = error;
            err.no_result = true;
            console.log("catch error on ", _url, " call fail", err)
            setTimeout(() => {
                alert("Unable to connect with server")
            }, 400)
            return err;
        }
    }

    // POST FUNCTIONS
    //Adding Post
    addPost(
        _title,
        _description,
        _videoLink,
    ) {
        let url = this._ADD_POST;
        let postData = {
            title: _title,
            description: _description,
            videoLink: _videoLink
        }
        console.log("data for adding>>>>>", postData)
        return this.sendPostRequest(url, postData, this.headers)
    }

    // Get POST List
    getPostList() {
        let url = this._GET_POST_LIST;
        return this.sendPostRequest(url, this.headers)
    }

    // Get POST List
    getPostById(id) {
        let url = this._GET_POST_LIST;
        let postId = { id: id }
        console.log("getting post by this id>>>>", id)
        return this.sendPostRequest(url, postId, this.headers)
    }

    // Deleting POST
    deletePost(id) {
        console.log("delete this id>>>>", id)
        let postId = { id: id }
        let url = this._DELETE_POST;
        return this.sendPostRequest(url, postId, this.headers)
    }


    //Admin login Check
    // checkAuth(
    //     _username,
    //     _password,
    // ) {
    //     let url = this._CHECK_AUTH;
    //     let adminData = {
    //         username: _username,
    //         password: _password,
    //     }
    //     console.log("data for login>>>>>", adminData)
    //     return this.sendPostRequest(url, adminData, this.headers)
    // }
}