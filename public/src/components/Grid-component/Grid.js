import React, { useState }  from 'react';
import './Grid.css'

export default function Grid() {

	const [ gutter,	setGutter ] = useState(2);

	function getGridItem(numOfBlocks){
		var gridItems=[]
		for(let i=0;i<numOfBlocks;i++){
			gridItems.push(<div>{i+1}</div>)
		}
		return(gridItems)
	}

	const gutterStyle = {
		gridColumnGap        : `${gutter}px`,
		gridRowGap           : `${gutter}px`,
	}

  return (
    <div className='container'>
			<div className="grid-container diff-col-size">
				{getGridItem(12)}
			</div>
			<div className="grid-container eql-col-size">
				{getGridItem(12)}
			</div>
			<input defaultValue={gutter} className='range-input' type="range" min="0" max="100" onChange={(e)=>setGutter(e.target.value)}></input>
			<div className="grid-container gutter" style={{...gutterStyle}}>
				{getGridItem(9)}
			</div>

    </div>
  )
}