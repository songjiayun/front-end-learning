import Loading from '@/components/my-loading';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const MyJavascript = lazy(() => import('@/pages/my-javascript'));
const MyReact = lazy(() => import('@/pages/my-react'));

function LayoutRoute() {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Redirect exact from={'/'} to={'/home'}></Redirect>
                <Route path={'/home'} component={Home}></Route>
                <Route path={'/my-js'} component={MyJavascript}></Route>
                <Route path={'/my-react'} component={MyReact}></Route>
            </Switch>
        </Suspense>
    );
}

export default LayoutRoute;
