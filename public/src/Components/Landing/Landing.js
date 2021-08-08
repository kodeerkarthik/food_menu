import React, {useEffect,useState}  from 'react';
import './Landing.css';
import { Switch, Collapse, Tag } from 'antd';
import 'antd/dist/antd.css';
// import catogory from './CategoryList'
// import special from './SpecialList'
import history from '../../history';
import api from '../../api/index'

const { Panel } = Collapse;

export default function Landing() {
	const [details, setDetails] = useState({});
	const [category, setCategory] = useState([]);
	const [special, setSpecial] = useState([]);
  const [items, setItems]= useState([]);

	useEffect(() => {
		getDetails();
		getCategories();
    getsplItems();
		getallItems();
	}, []);

	const getDetails=()=>{
		api.get('get_details').then(res=>{ 
			setDetails(res.data?.user[0])
			console.log(details)
		}).catch(err=>{
			console.log(err)
		})
	}

	const getsplItems=()=>{
		api.get('/get_today_special').then(res=>{
			setSpecial(res.data?.user);
		}).catch(err=>{
			console.log(err)
		})
	}

	const getallItems = () => {
    api.get('/get_items').then(res=>{
      setItems(res.data?.user);
    }).catch(err=>{
      console.log(err)
    })
  }

	const getCategories=()=>{
		api.get('get_menu').then(res=>{
			setCategory(res.data?.user);
		}).catch(err=>{
			console.log(err)
		})
	}
	function handleData(index){
		history.push({pathname: '/todaySpl',state: { detail: index }})
	}
  return (
		<div>
			<section id="hero" className="d-flex align-items-center">
				<div className="container-fluid" data-aos="fade-up">
					<div className="row justify-content-center">
						<div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
							{details?.Hotel_Logo?<img src={details?.Hotel_Logo} className="img-fluid animated" alt="logo"/> 
							:<img src={"https://belmontbec.com/wp-content/themes/oldnevia2/images/shop-01.jpg"} className="img-fluid animated" alt="asdas"/>}
						</div>
						<div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
							<h1>{details?.Hotel_Name}</h1>
							<h2 className='text-warning'>&quot;{details?.Slogan}&quot;</h2>
							<h2>{details?.Address}</h2>
							<h2><i className='fa fa-phone'/> : +91 {details?.Phone_Number}</h2>
							<div><a href="#today_spl" className="btn-get-started scrollto">Today's Special</a></div>
						</div>
					</div>
				</div>
			</section>

			<section id="filter">
				<Switch defaultChecked  /> <span>VEG ONLY</span>
				<hr/>
			</section>
			<section id="today_spl">
        <div className="row gy-3 t-spl-list">
					<h3 className='col-12 text-center text-light'>Today's Special</h3>
					{/* {special.map((data,index)=>
						<div className="col-lg-3 col-4 text-center">
							<div onClick={()=>handleData(index+1)}>{data.Add_items}</div>
						</div>
					)} */}
					{special.map((menu,index)=>
					{
						if(index>3.)
						return
						return menu.Enable_disable && <div className="col-lg-3 col-6">
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
					<div className="col-lg-3 col-12 text-center">
						<h6 className='text-light mt-3' onClick={()=>handleData(0)}> View All <i className='fa fa-arrow-right'/></h6>
          </div>
        </div>
			</section>
		
			<section id="category" className='bg-warning pt-3'>
				<h3 className='text-center text-secondary'>Categories</h3>
				<Collapse >
					{category.map((data,index)=>
						data.Enable_disable &&<Panel header={data.Add_category} key={index+1}>
							<div className='row gy-3'>
								{items.filter(i => i.Category == data.Add_category).map((item,index)=>
								{return item.Enable_disable &&<div className="col-lg-3 col-6">
									<div className="info-box row">
										<div className='col-5'>
											<img src={'https://static.toiimg.com/photo/72023714.cms'}/>
										</div>
										<div className='col-7'>
											{item.Veg_NonVeg?<Tag color="#87d068">Veg</Tag>:<Tag color="#f50">Non-veg</Tag>}
											<h6 className='mt-2'>&#x20B9;	{item.Items_price}</h6>
										</div>
										<h6 className='col-12 text-success bg-warning pt-1 pb-1'>{item.Add_items}</h6>
									</div>
								</div>}
								)}
							</div>
						</Panel>
					)}
				</Collapse>
			</section>
			{/* <Footer/> */}
		</div>
  );
}
