import React from "react";
import Window from "floating-window-ui";
import Icon from './icon.png';
import Vid from './video.gif';
import CopyToClipboard from "./copy";
import Chat from './cgpt.png';



const divStyles = {
  boxShadow: '1px 2px 9px #F4AAB9',
  margin: '4em',
  padding: '1em',
};

const Floating = () => {
  return (
    
    <Window 
      id="react-window"
      height={400}
      width={400}
      resizable={true}
      titleBar={{
        icon: <img src={Vid} alt="icon" height={200} width={415} style={{boxShadow: '1px 1px 150px #F4AAB9'}} />,
        title: "<site name>",
        buttons: { minimize: true, maximize: true },
        
      }}
      style={{overflow: 'hidden' }}
    >
      {/* <button style={{color: 'white'}}>Your Selected Text here</button> */}
      <CopyToClipboard />
      <textarea value="Search the results here:


      ChatGPT link   Google link    Reddit link" style={{ position: 'absolute', marginTop:'275px', left:'10px',width:'380px',height:'100px', backgroundColor: 'rgb(36,36,36)', color:'white', opacity:'0.9'}} readOnly>
        
          
      </textarea>
      
      
      
      
    </Window>

  );
};

export default Floating;