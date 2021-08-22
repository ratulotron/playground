import React from 'react';

import { Header } from './Header';

export const Root = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header homeLink="Home" />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    {props.children}
                </div>
            </div>
        </div>
    )
}