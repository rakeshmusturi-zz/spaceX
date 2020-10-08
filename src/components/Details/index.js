import React from 'react';
import "./style.scss";

class Details extends React.Component {
    render() {
        // console.log(this.state.items)
        const { items } = this.props;
        return (
        <div className={"DetailsDiv"}>
            {items.length > 0 ? <div>
                {items && items.map((data) => {
                    return (<div className={"productTile"}>
                        <div className="imageBlock">
                            <img style={{ width: '100%' }} alt={`SpaceX ${data.mission_name}`} src={data.links.mission_patch_small} />
                        </div>
                        <h5 style={{ color: "blue" }}>{data.mission_name}</h5>
                        <div>
                            <h5>Mission IDs: </h5>
                            <ul style={{ color: "blue" }}>
                                {data && data.mission_id && data.mission_id.map((k)=>{
                                    return (<li>{k}</li>)
                                })}
                            </ul>
                        </div>
                            <h5>{`Launch year: `}<span style={{ color: "blue" }}>{data.launch_year}</span></h5>
                            <h5>{'Sucessful Launch: '}<span style={{ color: "blue" }}>{data.launch_success.toString()}</span></h5>
                            <h5>{`Sucessful Landing: `}<span style={{ color: "blue" }}>{(data.rocket.first_stage.cores[0].land_success && data.rocket.first_stage.cores[0].land_success.toString()) || "false"}</span></h5>
                    </div>)
                })}
            </div> :
            <div style={{ textAlign: "center", fontSize: "24px", padding: "10%" }}>
                <h5>No Items(S) to display.</h5>
            </div>}
        </div>
        )
    }
    
}
export default Details;