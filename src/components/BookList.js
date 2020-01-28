import React, { Component } from 'react'
import {ThemeContext} from '../context/ThemeContext'

export default class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const {isLightTheme, light, dark}= this.context;
        const theme = isLightTheme? light : dark;
        console.log(this.context);
        
        return (
            <div className='book-list' style={{ color:theme.syntax, background:theme.ui}}>
                <ul>
                    <li>The way of kings</li>
                    <li>The name of the wind</li>
                    <li>The way of kings</li>
                </ul>
                
            </div>
        )
    }
}
