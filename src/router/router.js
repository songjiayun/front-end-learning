import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '@/pages/main/index';

function DispatchRoute(props) {
    return <Main {...props} />;
}

function BasicRoute() {
    return (
        <BrowserRouter basename="my">
            <Switch>
                <Route component={DispatchRoute} />
            </Switch>
        </BrowserRouter>
    );
}

export default BasicRoute;
