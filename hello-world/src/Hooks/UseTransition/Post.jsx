import React,{memo} from 'react';
import PropTypes from 'prop-types';
const PostsTab=memo(function PostsTab(){
    console.log('Arficially rendered slow');

    let datas=[];
    for(let i=0;i<200;i++){
        datas.push(<SlowRender key={i} index={i}/>);
    }
    return(
        <ul>
            {datas}
        </ul>
    );
});

function SlowRender({index}){
    let startTime=performance.now();
    while (performance.now()-startTime<1){

}
    return(
        <li>#{index+1}</li>
    );

}

export default PostsTab;

SlowRender.propTypes={
    index:PropTypes.number
};