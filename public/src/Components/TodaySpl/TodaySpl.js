import React, {useEffect,useState}  from 'react';
import './TodaySpl.css'
import {Link} from 'react-router-dom'
import {  Collapse, Tag } from 'antd';
import Footer from '../Footer/Footer';
import api from '../../api/index'

const { Panel } = Collapse;

export default function TodaySpl(props) {
	const [special, setSpecial] = useState([]);

	useEffect(() => {
	  getsplItems();
	}, []);

	const getsplItems=()=>{
		api.get('/get_today_special').then(res=>{
			setSpecial(res.data?.user);
		}).catch(err=>{
			console.log(err)
		})
	}

  return (
    <div style={{minHeight:'80vh'}}>
      <section id='header'>
				<Link to='/' className='btn back-btn'><i className='fa fa-arrow-left'/> BACK</Link>
			</section>
      <section id="category" className='bg-secondary p-3'>
				<div className='row gy-3'>
					{special.map((menu,index)=>
					{return menu.Enable_disable && <div className="col-lg-3 col-6">
						<div className="info-box row">
							<div className='col-5'>
								<img src={'https://static.toiimg.com/photo/72023714.cms'}/>
							</div>
							<div className='col-7'>
								{menu.radio1?<Tag color="#87d068">Veg</Tag>:<Tag color="#f50">Non-veg</Tag>}
								<h6 className='mt-2'>&#x20B9;	{menu.Items_price}</h6>
							</div>
							<h6 className='col-12 text-success bg-warning pt-1 pb-1'>{menu.Add_items}</h6>
						</div>
					</div>}
					)}			
				</div>
			</section>
      {/* <Footer/> */}
    </div>
  );
}
