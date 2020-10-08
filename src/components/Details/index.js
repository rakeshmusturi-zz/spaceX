import React from 'react';
import "./style.scss";

class Details extends React.Component {
    render() {
        // console.log(this.state.items)
        const { items } = this.props;
        return (
        <div className={"DetailsDiv"}>
            {items && items.map((data) => {
                return <div className={"productTile"}>
                    <div className="imageBlock">
                        <img style={{ width: '100%' }} alt="apcaeX" src={data.links.mission_patch_small} />
                    </div>
                    <h5>{data.mission_name}</h5>
                    <div>
                        <h5>Mission IDs: </h5>
                        <ul>
                            {data && data.mission_id && data.mission_id.map((k)=>{
                                return (<li>{k}</li>)
                            })}
                        </ul>
                    </div>
                    <h5>{`Launch year: ${data.launch_year}`}</h5>
                    <h5>{`Sucessful Launch: ${data.launch_success}`}</h5>
                    <h5>{`Sucessful landing: ${data.rocket.first_stage.cores[0].land_success || false}`}</h5>
                </div>
            })}
        </div>
        )
    }
    
}
export default Details;