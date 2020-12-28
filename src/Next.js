import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router-dom";



class Next extends React.Component{


constructor(props){

super(props);
var index=props.startindex;
var sindex=props.selectedindex;
var ans=props.answers;
this.click=props.nextClick;
this.callBack=props.callBack;

this.state={
	startindex:index,
	selectedindex:sindex,
	answers:ans

};
    this.routeChange = this.routeChange.bind(this);






}




routeChange() {

 
 this.callBack();
 this.props.history.push('/results', { answers: this.state.answers});


  }



componentWillReceiveProps(newProps) {
	var index=newProps.startindex;
	var sindex=newProps.selectedindex;
var ans=newProps.answers;


    this.setState({
	startindex:index,
	selectedindex:sindex,
	answers:ans

});
}






render(){



var ele=(<div 
	className="next"

style={{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor:"purple",
borderRadius:"32px",
textAlign:"center",
margin:"16px"

}}


onClick={this.click}
>
Save & Next
</div>);



var ele2=(<div 

className="submit"

style={{border:"1px solid purple",

padding:"8px 32px",
color:"white",
backgroundColor:"purple",
borderRadius:"32px",
textAlign:"center",
margin:"16px"

}}


onClick={this.routeChange}
>
Submit
</div>);



if(this.state.startindex==4){
return ele2;

}

else{
return ele;
	
}



}


}




export default withRouter(Next);
