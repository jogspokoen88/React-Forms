import React from 'react';
import './styles/style.less';
import {Layout} from "antd";
import Forms from "./Forms";

const {Header, Content} = Layout;

function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <Header className="header" >
                    <h1>MY INFO</h1>
                </Header>
                <Content className="wrapper">
                    <div className="avatar-block">
                        <div className="avatar">
                            <h1>JS</h1>
                        </div>
                        <svg className="linear" width="186" height="167" viewBox="0 0 186 167" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2"
                                  d="M183 4.00073C151 -0.832602 84.8 5.00073 76 67.0007C65 144.501 45.5 170 2.5 163.5"
                                  stroke="#13C2C2" stroke-width="5" stroke-linecap="round"/>
                        </svg>
                        <svg className="plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M14.0001 5.0092H10V1.00184C10 0.400736 9.60004 0 9.00004 0H6.00002C5.40002 0 5.00002 0.400736 5.00002 1.00184V5.0092H1C0.400002 5.0092 0 5.40993 0 6.01103V9.01655C0 9.61766 0.400002 10.0184 1 10.0184H5.00002V14.0257C5.00002 14.6269 5.40002 15.0276 6.00002 15.0276H9.00004C9.60004 15.0276 10 14.6269 10 14.0257V10.0184H14.0001C14.6001 10.0184 15.0001 9.61766 15.0001 9.01655V6.01103C15.0001 5.40993 14.6001 5.0092 14.0001 5.0092Z"
                                  fill="#08979C"/>
                        </svg>
                        <svg className="circle" width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M5.60001 0C8.70001 0 11.2 2.50462 11.2 5.61035C11.2 8.71608 8.70001 11.2207 5.60001 11.2207C2.5 11.2207 0 8.71608 0 5.61035C0 2.50462 2.5 0 5.60001 0Z"
                                  fill="#08979C"/>
                        </svg>
                        <svg className="rectangle" width="18" height="17" viewBox="0 0 18 17" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.2001 0L12.8001 8.91635L17.6001 16.6305L9.10005 13.5248L0 13.9255L6.90004 8.0147L11.2001 0Z"
                                fill="#08979C"/>
                        </svg>
                        <svg className="square" width="17" height="17" viewBox="0 0 17 17" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.16383 16.2937C8.46383 16.2937 7.76383 16.0933 7.06383 15.6926L2.16382 12.9876C1.16382 12.3865 0.463817 11.4849 0.163816 10.3829C-0.136184 9.28084 -0.0361841 8.07863 0.563817 7.0768L3.36382 2.16779C3.96382 1.16595 4.86383 0.464668 5.96383 0.164117C7.06383 -0.136434 8.16383 -0.0362505 9.16383 0.564852L14.0638 3.37C16.1638 4.5722 16.8638 7.17698 15.6638 9.28084L12.9638 14.0897C12.1638 15.4922 10.6638 16.2937 9.16383 16.2937ZM7.06383 2.96926C6.96383 2.96926 6.86383 2.96926 6.66383 2.96926C6.36383 3.06945 6.06383 3.37 5.96383 3.67055L3.16382 8.57955C2.96382 8.8801 2.96382 9.18066 2.96382 9.58139C3.06382 9.88194 3.26382 10.1825 3.56382 10.3829L8.46383 13.188C9.06383 13.5887 9.86383 13.2882 10.2638 12.6871L13.0638 7.77808C13.4638 7.17698 13.1638 6.37551 12.5638 5.97478L7.66383 3.16963C7.46383 3.06945 7.26383 2.96926 7.06383 2.96926Z"
                                fill="#08979C"/>
                        </svg>
                        <div className="avatar-description">
                            <h3>Avatar</h3>
                            <span>jpg or png with size 750x750 pixel, less 2 MB.</span>
                            <a href="">Download New</a>
                            <span>my-photo.png (1.1 MB)</span>
                        </div>
                    </div>
                    <Forms />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
