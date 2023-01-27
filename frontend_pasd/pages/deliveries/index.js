import { url } from "../../url"
import { useState } from "react"
import {List, ListItemButton, Collapse, ListItemText, TextField, Button, Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import axios from 'axios'

const Delivery = () => {
    const [open, setOpen] = useState(true);
    const [typeOfId, setTypeOfId] = useState('id');
    const [data, setData] = useState(null)
    const [idToSearch, setId] = useState("");
    const [showStatusButtons, setShowStatusButtons] = useState(false);
    const [newStatus, setNewStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (event)=>{
        setId(event.target.value);
        console.log(idToSearch)
    }

    const fetchDeliveries = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:3001/scheduler')
        .then((response) => {
            setData(response.data);
            setShowStatusButtons(false);
            setId("");
        })
        .catch((err) => console.log(err));
        
        setLoading(false);
        return res
    }

    const handleStatusChange = async (event)=>{
        await setNewStatus(event.target.value);
        console.log(idToSearch)
        const res = await axios.patch('http://localhost:3001/dddscheduler/' + idToSearch, {
            status: newStatus,
        })
        .then((response) => {
            setTimeout(() => {
                fetchDelivery();
            }, 600);
          })
          .catch((err) => console.log(err));     
    }

    const handleDeliveries = async () => {
        setLoading(true);
        const res = await axios.patch('http://localhost:3001/scheduler')
        .then((response) => {
            setData(response.data)
          })
          .catch((err) => console.log(err));
        setLoading(false);
        return res
    }
    const fetchDelivery = async () => {
        const res = await axios.get('http://localhost:3001/dddscheduler/'+idToSearch)
        .then((response) => {
            setData(response.data);
            setShowStatusButtons(true);
          })
          .catch((err) => console.log(err));
          
        return res
    }

    return ( 
    <div className="container">
    <h1 className="title">
        Deliveries page
        <span className={"redText " + (!loading ? "hidden" : "")}>LOADING...</span>
    </h1> 
    <div className="inputFieldContainer">     
        <input className="whiteText inputField" id="searchField" label="Outlined" variant="outlined" value={idToSearch} onChange={handleSearch} />
        <Button className="button" variant="contained" onClick={fetchDelivery}>Search delivery by id</Button>
    </div>
    <div className="inputFieldContainer">
        <Button className="button" variant="contained" onClick={fetchDeliveries}>Get all deliveries</Button>
    </div>
    <div className="inputFieldContainer">
        <Button className="button" variant="contained" onClick={handleDeliveries}>Handle</Button>
    </div>
    <div className="listContainer">
        <div className={"statusButtonsContainer " + (!showStatusButtons ? "hidden" : "")}>
            <Button className="button" variant="contained" onClick={handleStatusChange} value="RPF">Mark as RPF</Button>
            <Button className="button" variant="contained" onClick={handleStatusChange} value="TRN">Mark as TRN</Button>
            <Button className="button" variant="contained" onClick={handleStatusChange} value="DEL">Mark as DEL</Button>
        </div>

    <List
      sx={{ bgcolor: 'background.paper' }}
      component="nav"
      className= "List"
    >
    {data && data.map((item, index) =>{
        return <div key={item.id}>        
        <ListItemButton className="redText" key={item.id}>
            <ListItemText primary={(index+1)+". "+item.status} />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText className="redText" primary={"Id: "+item.id} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText className="redText" primary={"Expected delivery time: "+item.expected_deliver_datetime} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText className="redText" primary={"Cost: "+item.cost_in_cents} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemText className="redText" primary={"Deliverer id: "+item.dddeliverer_id} />
            </ListItemButton>
            </List>
        </Collapse>
        </div>
    })}
    </List>
    </div>

</div>
     );
}
export default Delivery;
<h1>Deliveries page</h1>