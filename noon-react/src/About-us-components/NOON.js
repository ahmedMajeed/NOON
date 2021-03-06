/* author : Mariam Ashraf Fekry*/
import React from "react"
import "./css/noonStyle.css"
import { PostAddressInfo } from "./../Contact-us-components/PostAddressInfo";
export const NOON =(props)=>
{
    return(
        /**Start NOON Component */
        <div className="cdiv-behind-content-noon">
            {/*Start Front Div NOON*/}
            <div className="cdiv-front-content-noon">
            <div className="cdiv-noon-title">{props.noon.title}</div>
            {   props.noon.id==1 ? <p className="cp-noon">{props.noon.content}</p>
                :<div id="idiv-content">
                    {props.noon.id==2?<div id="idiv-content-line"></div>:""}
                    <PostAddressInfo noon={props.noon}/>
                </div>
            }
            </div>
            {/*End Front Div NOON*/}
        </div>
        /**End NOON Component */
    );
}