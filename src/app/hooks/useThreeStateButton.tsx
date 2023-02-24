import React from 'react';

export function useThreeStateButton() {
    const [visible, setVisible] = React.useState(null as any);

    function handleVisibleFilter() {
        switch (visible) {
            case null:
                setVisible(true);
                break;
            case true:
                setVisible(false);
                break;
            case false:
                return setVisible(null);
        }
    }
    return {
        visible,
        setVisible,
        handleVisibleFilter,
    };
}
