import './App.css';




import React from 'react';
import ReactDOM from 'react-dom';

import Next from "./Next"



class App extends React.Component{



 call() {
 	this.setState({
	seconds:this.se
});


  if(this.se < 60) { // I want it to say 1:00, not 60
this.setState({
	seconds:this.se
});

  }
  if (this.se >0 ) { // so it doesn't go to -1
     this.se--;
  } else {

  	 this.props.history.push('/results', { answers: this.state.answers});
     clearInterval(this.timer);

  }
}




nextClick(event){




var q=this.state.startindex;
var ai=this.state.questions[q].answer;
var choosei=this.state.selectedindex;
var push={

	"question":q,
	"answeri":ai,
	"choosei":choosei
};


this.state.answers.push(push);






if(this.state.startindex >=0 && this.state.startindex <4)

{
	var index=this.state.startindex +=1;


}






this.setState({
	selected:{
		selectedindex:-1,
		
		bg1:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}
			,
			bg2:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg3:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg4:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}


		}

		,selectedindex:0
},


);



	this.setState(
{
	startindex:index
}
		);








}





changeonechoice(){




this.setState({
	selected:{
		
		bg1:

{border:"1px solid blue",

padding:"8px 32px",
color:"white",
backgroundColor: "blue",
borderRadius:"32px",
textAlign:"center"

}
			,
			bg2:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg3:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg4:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}


		}

		,selectedindex:0
},


);


}

changetwochoice(){



this.setState({
	selected:{
		
		bg1:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}
			,
			bg2:
{border:"1px solid blue",

padding:"8px 32px",
color:"white",
backgroundColor: "blue",
borderRadius:"32px",
textAlign:"center"

},
			bg3:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg4:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}


		},
		selectedindex:1
},


);

}


changethreechoice(){



this.setState({
	selected:{
		
		bg1:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}
			,
			bg2:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg3:
{border:"1px solid blue",

padding:"8px 32px",
color:"white",
backgroundColor: "blue",
borderRadius:"32px",
textAlign:"center"

},
			bg4:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}


		}
		,
		selectedindex:2
},


);

}

changefourchoice(){


this.setState({
	selected:{
			
			bg1:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}
			,
			bg2:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg3:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg4:
{border:"1px solid blue",

padding:"8px 32px",
color:"white",
backgroundColor: "blue",
borderRadius:"32px",
textAlign:"center"

}


		},

selectedindex:3
},

);


}

constructor(props){
	super(props)


		if(typeof this.props.location.state !== 'undefined' ){



this.call = this.call.bind(this);
this.state={seconds:10}
this.se=10;

this.timer=null;


if(!this.timer) {
    this.timer = window.setInterval(this.call, 1000);



var option=this.props.history.location.state.option;


if(option==0){

	var reqquestion=[


	



{
question:"The 'Dalong Village' covering an area of 11.35 sq. km. has recently (May 2017) been declared as Biodiversity Heritage Site under Section 37(1) of Biological Diversity Act, 2002. The village is situated in the Indian State of -",
options:["Manipur","Madhya Pradesh"," Mizoram","Maharashtra"],
answer:0,
type:"easy",

}

,




{
question:"........... is the first woman to head a public sector bank.",
options:["Arundhati Bhattacharya","Shikha Sharma","Chanda Kochar","Usha Ananthasubramanyan"],
answer:1,
type:"easy",

},


{
question:"World Tourism Day is celebrated on-",
options:["September 12","September 25","September 27","September 29"],
answer:2,
type:"easy",

},


{
question:"Where is Bose Institute?",
options:["Dispur","Kolkata","Mumbai","New Delhi"],
answer:3,
type:"easy",

},

{
question:"When is the International Yoga Day celebrated?",
options:["June 21","March 21","April 22","May 31"],
answer:3,
type:"easy",

},



		];

}

else if(option==1)

{

var reqquestion=[


	



{
question:"The 'Dalong Village' covering an area of 11.35 sq. km. has recently (May 2017) been declared as Biodiversity Heritage Site under Section 37(1) of Biological Diversity Act, 2002. The village is situated in the Indian State of -",
options:["Manipur","Madhya Pradesh"," Mizoram","Maharashtra"],
answer:0,
type:"easy",

}

,




{
question:"........... is the first woman to head a public sector bank.",
options:["Arundhati Bhattacharya","Shikha Sharma","Chanda Kochar","Usha Ananthasubramanyan"],
answer:1,
type:"easy",

},


{
question:"World Tourism Day is celebrated on-",
options:["September 12","September 25","September 27","September 29"],
answer:2,
type:"easy",

},


{
question:"Where is Bose Institute?",
options:["Dispur","Kolkata","Mumbai","New Delhi"],
answer:3,
type:"easy",

},

{
question:"When is the International Yoga Day celebrated?",
options:["June 21","March 21","April 22","May 31"],
answer:3,
type:"easy",

},



		];
}

else if(option==2){

var reqquestion=[


	



{
question:"The 'Dalong Village' covering an area of 11.35 sq. km. has recently (May 2017) been declared as Biodiversity Heritage Site under Section 37(1) of Biological Diversity Act, 2002. The village is situated in the Indian State of -",
options:["Manipur","Madhya Pradesh"," Mizoram","Maharashtra"],
answer:0,
type:"easy",

}

,




{
question:"........... is the first woman to head a public sector bank.",
options:["Arundhati Bhattacharya","Shikha Sharma","Chanda Kochar","Usha Ananthasubramanyan"],
answer:1,
type:"easy",

},


{
question:"World Tourism Day is celebrated on-",
options:["September 12","September 25","September 27","September 29"],
answer:2,
type:"easy",

},


{
question:"Where is Bose Institute?",
options:["Dispur","Kolkata","Mumbai","New Delhi"],
answer:3,
type:"easy",

},

{
question:"When is the International Yoga Day celebrated?",
options:["June 21","March 21","April 22","May 31"],
answer:3,
type:"easy",

},



		];
}

else{

var reqquestion=[


	



{
question:"The 'Dalong Village' covering an area of 11.35 sq. km. has recently (May 2017) been declared as Biodiversity Heritage Site under Section 37(1) of Biological Diversity Act, 2002. The village is situated in the Indian State of -",
options:["Manipur","Madhya Pradesh"," Mizoram","Maharashtra"],
answer:0,
type:"easy",

}

,




{
question:"........... is the first woman to head a public sector bank.",
options:["Arundhati Bhattacharya","Shikha Sharma","Chanda Kochar","Usha Ananthasubramanyan"],
answer:1,
type:"easy",

},


{
question:"World Tourism Day is celebrated on-",
options:["September 12","September 25","September 27","September 29"],
answer:2,
type:"easy",

},


{
question:"Where is Bose Institute?",
options:["Dispur","Kolkata","Mumbai","New Delhi"],
answer:3,
type:"easy",

},

{
question:"When is the International Yoga Day celebrated?",
options:["June 21","March 21","April 22","May 31"],
answer:3,
type:"easy",

},



		];
}
this.changeonechoice=this.changeonechoice.bind(this);
this.changetwochoice=this.changetwochoice.bind(this);
this.changethreechoice=this.changethreechoice.bind(this);
this.changefourchoice=this.changefourchoice.bind(this);



	this.state={
		answers:[],

			selected:{
			bg1:

{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}
			,
			bg2:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg3:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

},
			bg4:
{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor: "purple",
borderRadius:"32px",
textAlign:"center"

}

		},

		selectedindex:-1,

	
		questions:reqquestion,

		startindex:0,
	};


this.nextClick=this.nextClick.bind(this);

}

	

}
}



render(){
	
		if(typeof this.props.location.state === 'undefined')
			return <h1>Invalid Response</h1>;

else
return (
    


    <div className="quizz-con" >


<div>
<h1 style={{color:"white",textAlign:"center"}}>
Listee Quizz
</h1>
</div>


<div>

<div style={{padding:"32px",backgroundColor:"white"}}>


<div className="container-fluid" >

<div className="row">

<div className="col-sm">


<h2>
Time is running up...
Beware of you can not go to previous question once you answered.
</h2>
</div>

<div className="col-sm">


<h2 style={{color:"red"}}>

<span style={{fontSize:"32px"}}>
{this.state.seconds } 
</span>


 S Only

</h2>

</div>
</div>
</div>

<div style={{border:"1px solid purple",padding:"16px"}}>
<h1 style={{padding:"16px 0px"}}>
{

	this.state.questions[this.state.startindex].question
}

</h1>
<div className="container-fluid">
<div className="row">

<div className="col-sm-6" style={{padding:"16px 8px",}}

onClick={this.changeonechoice}
>

<h4 style={this.state.selected.bg1}


>


{	this.state.questions[this.state.startindex].options[0]
}

</h4>

</div>
<div className="col-sm-6" style={{padding:"16px 8px",}}

onClick={this.changetwochoice}

>

<h4   

style={this.state.selected.bg2}

>


{
		this.state.questions[this.state.startindex].options[1]

}

</h4>

</div>

<div className="col-sm-6" style={{padding:"16px 8px",}}


onClick={this.changethreechoice}
>


<h4 
style={this.state.selected.bg3}

>

{	this.state.questions[this.state.startindex].options[2]
}
</h4>
</div>
<div className="col-sm-6" style={{padding:"16px 8px",}}

onClick={this.changefourchoice}
>

<h4 
style={this.state.selected.bg4}>


{	this.state.questions[this.state.startindex].options[3]
}
</h4>

</div>

</div>
</div>
</div>


<Next 


startindex={this.state.startindex}
selectedindex={this.state.selected.selectedindex}

callBack={this.nextClick}

nextClick={this.nextClick}

answers={this.state.answers}
/>

</div>







</div>


    </div>
  );
}






}



export default App;
