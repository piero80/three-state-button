import * as React from 'react';
import { ThreeStateButton } from './components/ThreeStateButton';
import { useThreeStateButton } from './hooks/useThreeStateButton';
// import { ReactComponent as Visibile } from 'images/eye.svg';
// import { ReactComponent as NotVisibile } from 'images/eye-slash.svg';

export function App() {
    const { visible, setVisible, handleVisibleFilter } = useThreeStateButton();
    return (
        <ThreeStateButton
            stateFilter={visible}
            setStateFilter={handleVisibleFilter}
            component={''}
            secondComponent={''}
            titleComponent="visible"
            titleSecondComponent="non visibile"
        />
    );
}
