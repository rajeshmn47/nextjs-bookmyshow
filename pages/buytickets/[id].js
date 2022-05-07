import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Selectseats from '../components/selectnoseats';

const Buytickets = ({movie}) => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] =useState(null);
  const [seatopen, setSeatopen] =useState(false);
  const { id } = router.query
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
  <>
  <div className={styles.buytickets}>
{movie.name}
  </div>
  <div className={styles.ticketsfilter}>
<div className={styles.datefilter}>
    <KeyboardArrowLeftIcon/>
<li className={styles.selectedfilter}>
<p>07</p>
<p>Today</p>
    </li>
    <li>
    <p>  08</p> <p>TOM </p>
        </li>
        <li>
    <p>  09</p> <p>MON</p>
        </li>
        <li>
    <p>  10</p> <p>TUE </p>
        </li>
        <li>
    <p>  10</p> <p>TUE </p>
        </li>
        <li>
    <p>  10</p> <p>TUE </p>
        </li>
        <KeyboardArrowRightIcon/>
</div>
<div className={styles.rightfilters}>
<div className={styles.indivfilter}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu <ExpandMoreIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    <div className={styles.indivfilter}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu <ExpandMoreIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    <div className={styles.indivfilter}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu <ExpandMoreIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    <div className={styles.indivfilter}>
  <SearchIcon/>
    </div>
    <div>
    
    </div>

</div>

  </div>
  <div className={styles.theatrescontainer}>
      <div className={styles.theatresheading}>
<h5>
<span className={styles.available}>

</span>
    available
    <span className={styles.fastfilling}>
        
        </span>
    Fast Filling
    <span className={styles.lngavailable}>
        lan
        </span>
        SUBTITLES LANGUAGE
      
</h5>
      </div>
 
  <div className={styles.theatre}>
<FavoriteBorderOutlinedIcon style={{color:'#666666',marginRight:'2vw'}}/>
<div style={{width:'27vw'}} >
<h5>
        PVR:Gold,Forum Mall,Koramangala
    </h5>
    <div style={{display:'flex',alignItems:'center',marginRight:'2vw',justifyContent:'flex-start'}}>
    <div style={{display:'flex',alignItems:'center',marginRight:'1vw',marginTop:'1vh',marginBottom:'1vh'}}>
<ConfirmationNumberOutlinedIcon style={{color:'#49BA8E'}}/> 
<h5 style={{color:'#49BA8E',margin:'0vh 0vw'}}>M-Ticket</h5>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<FastfoodOutlinedIcon style={{color:'#FFA426'}}/>
<h5 style={{color:'#FFA426',margin:'0vh 1vw'}}>Food And Beverages</h5>
</div>
</div>
  </div>
  <button className={styles.showti}>
      <InfoOutlinedIcon/>
      INFO</button>
  <div>
      <button className={styles.showtime}>09:30AM</button>
      <button className={styles.showtime}>09:30AM</button>
  </div>
  </div>
  <div className={styles.theatre}>
<FavoriteBorderOutlinedIcon style={{color:'#666666',marginRight:'2vw'}}/>
<div style={{width:'27vw'}} >
<h5>
        PVR:Gold,Forum Mall,Koramangala
    </h5>
    <div style={{display:'flex',alignItems:'center',marginRight:'2vw',justifyContent:'flex-start'}}>
    <div style={{display:'flex',alignItems:'center',marginRight:'1vw',marginTop:'1vh',marginBottom:'1vh'}}>
<ConfirmationNumberOutlinedIcon style={{color:'#49BA8E'}}/> 
<h5 style={{color:'#49BA8E',margin:'0vh 0vw'}}>M-Ticket</h5>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<FastfoodOutlinedIcon style={{color:'#FFA426'}}/>
<h5 style={{color:'#FFA426',margin:'0vh 1vw'}}>Food And Beverages</h5>
</div>
</div>
  </div>
  <button className={styles.showti}>
      <InfoOutlinedIcon/>
      INFO</button>
  <div>
      <button className={styles.showtime}>09:30AM</button>
      <button className={styles.showtime}>09:30AM</button>
  </div>
  </div>
  <div className={styles.theatre}>
<FavoriteBorderOutlinedIcon style={{color:'#666666',marginRight:'2vw'}}/>
<div style={{width:'27vw'}} >
<h5>
        PVR:Gold,Forum Mall,Koramangala
    </h5>
    <div style={{display:'flex',alignItems:'center',marginRight:'2vw',justifyContent:'flex-start'}}>
    <div style={{display:'flex',alignItems:'center',marginRight:'1vw',marginTop:'1vh',marginBottom:'1vh'}}>
<ConfirmationNumberOutlinedIcon style={{color:'#49BA8E'}}/> 
<h5 style={{color:'#49BA8E',margin:'0vh 0vw'}}>M-Ticket</h5>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<FastfoodOutlinedIcon style={{color:'#FFA426'}}/>
<h5 style={{color:'#FFA426',margin:'0vh 1vw'}}>Food And Beverages</h5>
</div>
</div>
  </div>
  <button className={styles.showti}>
      <InfoOutlinedIcon/>
      INFO</button>
  <div>
      <button className={styles.showtime} onClick={()=>setSeatopen(true)}>09:30AM</button>
      <button className={styles.showtime}>09:30AM</button>
  </div>
  </div>
  <div className={styles.theatre}>
<FavoriteBorderOutlinedIcon style={{color:'#666666',marginRight:'2vw'}}/>
<div style={{width:'27vw'}} >
<h5>
        PVR:Gold,Forum Mall,Koramangala
    </h5>
    <div style={{display:'flex',alignItems:'center',marginRight:'2vw',justifyContent:'flex-start'}}>
    <div style={{display:'flex',alignItems:'center',marginRight:'1vw',marginTop:'1vh',marginBottom:'1vh'}}>
<ConfirmationNumberOutlinedIcon style={{color:'#49BA8E'}}/> 
<h5 style={{color:'#49BA8E',margin:'0vh 0vw'}}>M-Ticket</h5>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<FastfoodOutlinedIcon style={{color:'#FFA426'}}/>
<h5 style={{color:'#FFA426',margin:'0vh 1vw'}}>Food And Beverages</h5>
</div>
</div>
  </div>
  <button className={styles.showti}>
      <InfoOutlinedIcon/>
      INFO</button>
  <div>
      <button className={styles.showtime}>09:30AM</button>
      <button className={styles.showtime}>09:30AM</button>
  </div>
  </div>
  <div className={styles.theatre}>
<FavoriteBorderOutlinedIcon style={{color:'#666666',marginRight:'2vw'}}/>
<div style={{width:'27vw'}} >
<h5>
        PVR:Gold,Forum Mall,Koramangala
    </h5>
    <div style={{display:'flex',alignItems:'center',marginRight:'2vw',justifyContent:'flex-start'}}>
    <div style={{display:'flex',alignItems:'center',marginRight:'1vw',marginTop:'1vh',marginBottom:'1vh'}}>
<ConfirmationNumberOutlinedIcon style={{color:'#49BA8E'}}/> 
<h5 style={{color:'#49BA8E',margin:'0vh 0vw'}}>M-Ticket</h5>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<FastfoodOutlinedIcon style={{color:'#FFA426'}}/>
<h5 style={{color:'#FFA426',margin:'0vh 1vw'}}>Food And Beverages</h5>
</div>
</div>
  </div>
  <button className={styles.showti}>
      <InfoOutlinedIcon/>
      INFO</button>
  <div>
      <button className={styles.showtime}>09:30AM</button>
      <button className={styles.showtime}>09:30AM</button>
  </div>
  </div>
  <div className={styles.theatre}>
<FavoriteBorderOutlinedIcon style={{color:'#666666',marginRight:'2vw'}}/>
<div style={{width:'27vw'}} >
<h5>
        PVR:Gold,Forum Mall,Koramangala  
    </h5>
    <div style={{display:'flex',alignItems:'center',marginRight:'2vw',justifyContent:'flex-start'}}>
    <div style={{display:'flex',alignItems:'center',marginRight:'1vw',marginTop:'1vh',marginBottom:'1vh'}}>
<ConfirmationNumberOutlinedIcon style={{color:'#49BA8E'}}/> 
<h5 style={{color:'#49BA8E',margin:'0vh 0vw'}}>M-Ticket</h5>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<FastfoodOutlinedIcon style={{color:'#FFA426'}}/>
<h5 style={{color:'#FFA426',margin:'0vh 1vw'}}>Food And Beverages</h5>
</div>
</div>
  </div>
  <button className={styles.showti}>
      <InfoOutlinedIcon/>
      INFO</button>
  <div>
      <button className={styles.showtime}>09:30AM</button>
      <button className={styles.showtime}>09:30AM</button>
  </div>
  </div>
 <Selectseats seatopen={seatopen} setSeatopen={setSeatopen} />
  </div>
  </>
  )
}

export default Buytickets


  export async function getServerSideProps({ params:{id} }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 
    const res = await fetch(`http://localhost:3000/api/theatres/${id}`)
    const ces = await fetch(`http://localhost:3000/api/movie/${id}`)
    const post = await res.json()
    const tost = await ces.json()
    // Pass post data to the page via props
    return {  props: {
      theatres: post.data,
movie:tost.data
    },  }
  }
