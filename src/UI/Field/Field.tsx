import './Field.css';

import React, { PureComponent } from 'react'

const Field = ({ cells }) => {
    return (
        <div className='field-tag'>
            <div className='background'>
                {/* prettier-ignore */
                    Array
                        .from(new Array(16), (_, i) => i).map(i => (
                            <div className='background-cell' key={i} />
                        )
                        )}
            </div>

            <div className='playground'>
                {cells.map(({ x, y, id, value }: any) => (

                    <div key={id}
                        className='cell'
                        style={cellStyle({ value, x, y })}>
                        {value}
                    </div>
                ))}
            </div>
        </div>
    )
}

const cellStyle = ({ value, x, y }: any) => ({
    transform: `translate(${x * 113.5}px, ${y * 113.5}px)`,
    fontSize: `${value < 100 ? 66 : value < 1000 ? 47 : value < 10000 ? 40 : 30}px`,
    backgroundColor: `${calculateBackgroundColor({ value })}`
});

const calculateBackgroundColor = ({ value }: any) => {
    if (value === 0) {
        return 'transparent';
    }
    // from 0 to 16
    const step = Math.min(16, Math.log2(value));
    return `hsl(0, ${calculateSaturation(step)}%, ${calculateLightness(step)}%)`
};

const calculateSaturation = (step: number) => Math.floor(100 / 16 * step);
const calculateLightness = (step: number) => 100 - Math.floor(50 / 16 * step);

export default Field;
