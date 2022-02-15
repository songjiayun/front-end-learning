import React, { lazy, Suspense } from 'react';
import Loading from '@/components/my-loading';
import { Switch, Route } from 'react-router-dom';

const MyAntd = lazy(() => import('@/pages/my-react/my-antd'));
const MyComponents = lazy(() => import('@/pages/my-react/my-components'));

function MyReact({ match }) {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path={match.path} component={MyAntd}></Route>
                <Route path={`${match.path}/antd`} component={MyAntd}></Route>
                <Route path={`${match.path}/components`} component={MyComponents}></Route>
            </Switch>
        </Suspense>
    );
}

export default React.memo(MyReact);
