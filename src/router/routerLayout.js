import Loading from '@/components/my-loading';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const home = lazy(() => import('@/pages/home'));
const project = lazy(() => import('@/pages/project'));

function LayoutRoute() {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Redirect exact from={'/'} to={'/home'}></Redirect>
                <Route path={'/home'} component={home}></Route>
                <Route path={'/project'} component={project}></Route>
            </Switch>
        </Suspense>
    );
}

export default LayoutRoute;
