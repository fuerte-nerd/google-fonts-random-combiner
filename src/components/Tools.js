import React from 'react'
import LockButtons from './LockButtons'
import ColorButtons from './ColorButtons'
import MainButtons from './MainButtons'

export default function Tools(props) {
    return (
        <div style={{ background: 'white'}}>
            <LockButtons />
            <ColorButtons />
            <MainButtons randomFontGetter={props.randomFontGetter}/>
        </div>
    )
}
