import React from 'react'
import { RealTimeComponent } from '../../components/RealTimeComponent/RealTimeComponent';
import { Sidebar } from './../../components/Sidebar/Sidebar';
export const RealTimeMain = (props) => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <RealTimeComponent />
        </div>)
} 