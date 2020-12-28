









import './App.css';

import {withRouter} from "react-router-dom";



import React from 'react';
import ReactDOM from 'react-dom';



class Choose extends React.Component{




submit(){





if(this.state.selected.selectedindex===-1){
alert("Please choose the option");
}
else{
 this.props.history.push('/home', { option: this.state.selected.selectedindex});


}

}

constructor(props){
	super(props)

	

this.submit=this.submit.bind(this);


this.state={
	selected:{
		selectedindex:-1,
		
		bg1:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

},

		bg2:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

},

		bg3:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

}


}
};


this.one=this.one.bind(this);
this.two=this.two.bind(this);

this.three=this.three.bind(this);



}








one(){





this.setState({
	selected:{
		selectedindex:0,
		
		bg1:

{border:"1px solid blue",

padding:"8px 32px",
color:"white",
backgroundColor: "blue",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

},

		bg2:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

},

		bg3:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

}


}
});

}

two(){



this.setState({
	selected:{
		selectedindex:1,
		
		bg1:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

},

		bg2:

{border:"1px solid blue",

padding:"8px 32px",
color:"white",
backgroundColor: "blue",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

},

		bg3:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

}


}
});



}

three(){





this.setState({
	selected:{
		selectedindex:2,
		
		bg1:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

},

		bg2:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

},

		bg3:

{border:"1px solid blue",

padding:"8px 32px",
color:"white",
backgroundColor: "blue",
borderRadius:"32px",
textAlign:"center",
margin:"8px",

}


}
});


}




render(){
	

  return (
    


    <div className="quizz-con" style={{height:"100%"}}>


<div>
<h1 style={{color:"white",textAlign:"center"}}>
Listee Quizz
</h1>
</div>


<div style={{backgroundColor:"white",padding:"16px"}}>


<div style={{color:"black"}}>
<h2 >
Choose the option...
</h2>

</div>

<div style={{color:"black"}} >

<div className="container-fluid" >


<div className="row">

<div

onClick={this.one}

 className="col-sm-12" style={this.state.selected.bg1}



>

<h3>
Easy
</h3>



</div>

<div
onClick={this.two}
 className="col-sm-12" style={this.state.selected.bg2}>


<h3>
Medium
</h3>

</div>


<div 

onClick={this.three}

className="col-sm-12" style={this.state.selected.bg3}>


<h3 >
Hard
</h3>

</div>


<div 

onClick={this.submit}

className="col-sm-12" style={{border:"1px solid black",

padding:"8px 32px",
color:"white",
backgroundColor:"black",
borderRadius:"32px",
textAlign:"center",
margin:"16px",
cursor:"pointer"
}}>


<h3 >
Submit
</h3>

</div>


</div>
</div>
</div>






</div>


    </div>
  );
}








}



export default withRouter(Choose);

