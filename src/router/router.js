import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '@/pages/main/index';
// import Home from '@/pages/home/index';
// import Project from '@/pages/project/index';

function DispatchRoute(props) {
    return <Main {...props} />;
}

function BasicRoute() {
    return (
        <BrowserRouter basename="my">
            <Switch>
                {/* <Route exact path={'/'} component={Home} /> */}
                {/* <Route path={'/project'} component={Project} /> */}
                <Route component={DispatchRoute} />
            </Switch>
        </BrowserRouter>
    );
}

export default BasicRoute;
