import Loading from '@/components/my-loading';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const home = lazy(() => import('@/pages/home'));
const javascript = lazy(() => import('@/pages/javascript'));

function LayoutRoute() {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Redirect exact from={'/'} to={'/home'}></Redirect>
                <Route path={'/home'} component={home}></Route>
                <Route path={'/javascript/points'} component={javascript}></Route>
            </Switch>
        </Suspense>
    );
}

export default LayoutRoute;
