import React, {useEffect,useState}  from 'react';
import api from '../../api/index'
import './Footer.css';

export default function Footer() {
  const [details, setDetails] = useState({});

  useEffect(() => {
		getDetails();
	}, []);

	const getDetails=()=>{
		api.get('get_details').then(res=>{ 
			setDetails(res.data?.user[0])
			console.log(details)
		}).catch(err=>{
			console.log(err)
		})
	}

  return (
    <section id='footer'>
      <div className='row'>
          <h6 className='col-7 text-white'><i className='fa fa-phone'/> : +91 {details?.Phone_Number}</h6>
          <div className='col-5 address'>
          {details?.Address}
          </div>
      </div>
      <div className='d-flex justify-content-center mt-2'>Developed by &nbsp;<a href='https://checkonline.in' target='_blanck' className='text-warning'> checkonline </a></div> 
    </section>
  );
}