import React from 'react';
import "./style.scss";

class FilterBar extends React.Component {
    render() {
        const { activeId, history } = this.props;
        let params = new URLSearchParams(history.location.search);
        const year = params.get('launch_year');
        const launch = params.get('launch_success');
        const land = params.get('land_success');
        const filterJson = [
            { id: 2006 },
            { id: 2007 },
            { id: 2008 },
            { id: 2009 },
            { id: 2010 },
            { id: 2011 },
            { id: 2012 },
            { id: 2013 },
            { id: 2014 },
            { id: 2015 },
            { id: 2016 },
            { id: 2017 },
            { id: 2018 },
            { id: 2019 },
            { id: 2020 }
        ];
        return (
        <div className={"FilterBarDiv"}>
            <h2>Filter</h2>
            <div className="filterSec">
                <h3>Launch Year</h3>
                <hr />
            </div>
            <div>
            {filterJson.map((i)=><div className={"buttonDiv"} ><button onClick={()=>this.props.onFilterClick(i.id, "year")} aria-label={i.id.toString()} style={year && (year.toString() === i.id.toString()) ? {background: "#0ca20cc7"} : {background: "#61de6178"}}>{i.id}</button></div>)}
            </div>
            <div className="filterSec">
                <h4>Sucessful Launch</h4>
                <hr />
            </div>
            <div>
                <div className={"buttonDiv"} ><button onClick={()=>this.props.onFilterClick(true, "launch")} aria-label={"true"} style={launch==='true' ? {background: "#0ca20cc7"} : { background:"#61de6178" }}>True</button></div>
                <div className={"buttonDiv"} ><button onClick={()=>this.props.onFilterClick(false, "launch")} aria-label={"false"} style={launch==='false' ? {background: "#0ca20cc7"} : { background:"#61de6178" }}>False</button></div>
            </div>
            <div className="filterSec">
                <h5>Sucessful Landing</h5>
                <hr />
            </div>
            <div>
                <div className={"buttonDiv"} ><button onClick={()=>this.props.onFilterClick(true, "land")} aria-label={"true"} style={land === 'true' ? {background: "#0ca20cc7"} : { background:"#61de6178" }}>True</button></div>
                <div className={"buttonDiv"} ><button onClick={()=>this.props.onFilterClick(false, "land")} aria-label={"false"} style={land==='false' ? {background: "#0ca20cc7"} : { background:"#61de6178" }}>False</button></div>
            </div>
        </div>
        )
    }
    
}
export default FilterBar;