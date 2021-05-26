import React  from 'react';
import Button from '../Button-component/Button';
import './ButtonList.css'

export default function ButtonList() {
  return (
    <div className='container'>
      <div className='flex-box'>
        <Button btnColor="green" size="large"> Large Button </Button>
        <Button btnColor='green' >Default Button</Button>
        <Button size="small" btnColor='green' labelColor='white'>Small Button</Button>               
      </div>
      <hr/>
      <div className='flex-box'>
        <Button btnColor='orange' icon='fa fa-user-circle-o' >With Icon</Button>
        <Button btnColor='orange' >Without Icon</Button>
      </div>
      <hr/>
      <div  className='flex-box'>
        <Button btnColor="black" icon='fa fa-refresh fa-spin' isDisabled>Loading Button</Button> 
      </div><hr/>
      <div  className='flex-box'>
        <Button btnColor="red" isDisabled>Disabled Button</Button> 
      </div>
    </div>
    
  );
}
