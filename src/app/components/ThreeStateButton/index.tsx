/**
 *
 * ThreeState Component
 *
 */

import * as React from 'react';
import classNames from 'classnames';
// import './src/app/components/styles.css';

interface Props {
    component?: React.ReactNode;
    secondComponent?: React.ReactNode;
    stateFilter?: boolean;
    setStateFilter?: () => void;
    titleComponent?: string;
    titleSecondComponent?: string;
    classname?: string;
}

export function ThreeStateButton(props: Props) {
    const { component, stateFilter, setStateFilter, titleComponent, secondComponent, titleSecondComponent, classname } =
        props;

    return (
        <div className="container">
            <button
                onClick={setStateFilter}
                className={classNames(classname, {
                    ['active']: stateFilter === true || stateFilter === false,
                })}
            >
                {(stateFilter === null || stateFilter === true) && (
                    <>
                        {component}
                        {titleComponent}
                    </>
                )}
                {stateFilter === false && (
                    <>
                        {secondComponent}
                        {titleSecondComponent}
                    </>
                )}
            </button>
        </div>
    );
}
