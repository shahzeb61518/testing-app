import React from 'react';


const HomePage = React.lazy(() => import('../pages/Body'))
const FeedPage = React.lazy(() => import('../pages/Feeds'))
const PostPage = React.lazy(() => import('../pages/Post'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/home', exact: true, name: 'Home', component: HomePage },
    { path: '/feeds', exact: true, name: 'Feed Page', component: FeedPage },
    { path: '/post', exact: true, name: 'Post', component: PostPage },
];

export default routes;
