import './ControlPanel.css';

import React, { PureComponent } from 'react';

class ControllPanel extends PureComponent<any> {
    public render() {
        const { children } = this.props;
        return <div className='container'>
            {children}
        </div>
    }
}
export default ControllPanel;