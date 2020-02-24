import React from 'react';
import styles from './styles.less';
import Draggable, { DraggableCore } from 'react-draggable';

const Data = [
    { id: 1, color: null },
    { id: 2, color: 'red' },
    { id: 3, color: 'yellow' },
    { id: 4, color: 'blue' },
    { id: 5, color: 'green' },
]

export default class Broad extends React.Component {

    state = {
        bEdit: false,
    }

    _modeConversion = () => {
        this.setState((pre) => { return { bEdit: !pre.bEdit } })
    }

    render() {
        return (
            <div className={styles.container}>
                <button
                    type='button'
                    className={styles.btn}
                    onMouseOver={this._overBtn}
                    onMouseOut={this._outBtn}
                    onClick={this._modeConversion}
                >
                    {this.state.bEdit ? 'Done' : 'Edit'}
                </button>
                <div className={`${styles.inner} ${this.state.bEdit && styles.innerBorder}`}>
                    {
                        Data.map((item, index) =>
                            <Draggable
                                key={item.id}
                                disabled={!this.state.bEdit}
                                defaultPosition={{ x: 0, y: 0 }}
                                bounds={'parent'}
                            >
                                <div className={styles.box} style={{ backgroundColor: item.color, cursor: this.state.bEdit && 'move' }} />
                            </Draggable>
                        )
                    }
                </div>
            </div>
        )
    }
}