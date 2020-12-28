









import './App.css';




import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router-dom";



class Results extends React.Component{






constructor(props){
	super(props)



	if(typeof this.props.location.state !== 'undefined'){



var data=this.props.location.state.answers;

this.state={"answers":data}

var total=this.state.answers.length;
var correct=0;


var items=this.state.answers;
for(var po=0;po<total;po++){

var an=items[po].answeri;
var ch=items[po].choosei;

if(an ===ch){
correct+=1;
}


}

var ability="None";
switch(correct){
	case 0:
	ability="General";
	break;
	case 1:
		ability="Poor";
	break;
	case 2:
		ability="Bad";
	break;

	case 3:
		ability="Good";
	break;

	case 4:
		ability="Strong";
	break;

	case 5:
		ability="Very Strong";
	break;
	default:

}

this.state={
	"validate":
	{"total":5,"correct":correct,"ability":ability}
}


	}
}









render(){
	




	if(typeof this.props.location.state === 'undefined')
		return <h1>Invalid Response</h1>;

else
  return (
    


    <div className="quizz-con" style={{height:"100%"}}>


<div>
<h1 style={{color:"white",textAlign:"center"}}>
Listee Quizz
</h1>
</div>


<div>


<div style={{color:"white"}}>
<h2 >
Your score based on your performnace
</h2>

</div>

<div style={{color:"white"}}>

<div className="container-fluid">


<div className="row">

<div className="col-sm-12">

<h3 style={{fontSize:"64px",position:"relative",top:"50%",

transform:"translateY(-50%)",
fontWeight:"bold"
}}>


{this.state.validate.ability}
</h3>
</div>

<div className="col-sm-12">

<span style={{fontSize:"128px",fontWeight:"bold"}}>

{this.state.validate.correct}
</span>

<span style={{fontSize:"128px",fontWeight:"bold"}}>
/

</span>


<span style={{fontSize:"128px",fontWeight:"bold"}}>

{this.state.validate.total}
</span>


</div>

</div>
</div>
</div>






</div>


    </div>
  );
}








}



export default Results;
