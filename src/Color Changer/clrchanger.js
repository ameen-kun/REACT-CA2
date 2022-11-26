import React,{useEffect} from "react";
import { options } from "./inputl";
import './style.css';

const colorchanger=(e)=>{
    var x=e.target.value;
    var y=e.target.name;
    document.getElementById('res').style.display="block";
    document.getElementById('res').style.backgroundColor=x;
    document.getElementById('res').title=y;
}
var flag=0;
const divgen=()=>{
    if(flag==0){
        document.getElementById('opt').style.display="flex";
        flag=1;
    }else{
        document.getElementById('opt').style.display="none";
        flag=0;
    }
}
const respage=()=>{
    document.getElementById('res').style.display="none";
    document.getElementById('opt').style.display="none";
}
const Clrch=()=>{
    return(
    <>
        <h1>COLOR CHANGER</h1>
        <div className="outer">
            <div className="dropoptions">
                <button onClick={divgen}>DropDown Menu</button>
                <div className="options" id="opt">
                    {options.map((item)=>{
                        return(
                        <button value={item.value} name={item.label} onMouseEnter={colorchanger}>{item.label}</button>
                        )
                    })}
                </div>
            </div>
            <div className="res-container">
                <div className="res" id='res'></div>
            </div>
        </div>
        <button id="repage" onClick={respage}>RESET</button>
    </>
    )
}
export default Clrch;