import React from "react" ;
import { withRouter } from 'react-router-dom';
import Header from "../components/Header/index";
import FilterBar from '../components/FilterBar/index';
import Details from '../components/Details/index';
import Footer from '../components/Footer/index';
import './style.scss';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            activeId: null
        };
    }
    componentDidMount() {
        console.log(this.props.history.location.search)
    const defaultUrl = this.props.history.location.search ? this.props.history.location.search : "?limit=100";
    this.props.history.push(`/launches${defaultUrl}`);
    let url = "https://api.spacexdata.com/v3/launches";
    let params = new URLSearchParams(this.props.history.location.search);
    const year = params.get('launch_year');
    const launch = params.get('launch_success');
    const land = params.get('land_success');
    console.log(year, launch,land)//123
    console.log(params, 'params');
    fetch(`${url}${defaultUrl}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(result, '----')
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    onFilterClick = (id, filterkey) => {
        let url = "https://api.spaceXdata.com/v3/launches?limit=100&";
        let params = new URLSearchParams(this.props.history.location.search);
        const year = params.get('launch_year')||"";
        const launch = params.get('launch_success')||"";
        const land = params.get('land_success')||"";
        let quertPar;
        // let queryPar;
        // if(params.get('launch_year') && filterkey!=="year"){
        //     queryPar = filterkey==="year" ? `&launch_year=${id}` :`${url}&launch_year=${year}`;
        // } else {
        //     queryPar = `/launches?limit=100&launch_year=${id}`;
        // }
        // if(params.get('launch_success') && filterkey!=="launch"){
        //     queryPar = filterkey==="launch" ? `&launch_success=${id}` :`${url}&launch_success=${launch}`;
        //     // url = `${url}&launch_success=${launch}`;
        // } else {
        //     queryPar = `/launches?limit=100&launch_success=${id}`;
        // }
        // if(params.get('land_success')){
        //     queryPar = filterkey==="land" ? `&land_success=${id}` :`${url}&land_success=${land}`;
        //     //url = `${url}&land_success=${land}`;
        // }
        // this.props.history.push(queryPar);
        // console.log(url, queryPar,year, launch,land)//123
        // url = `${url}${queryPar}`;
        if (filterkey==="year") {
            url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${id}`;
            quertPar = `/launches?limit=100&launch_year=${id}`;
            if(launch !=="") {
                url = `${url}&launch_success=${launch}`;
                quertPar = `${quertPar}&launch_success=${launch}`;
            }
            if(land !=="") {
                url = `${url}&land_success=${land}`;
                quertPar = `${quertPar}&land_success=${land}`;
            }
            this.props.history.push(quertPar);
        } else if (filterkey==="launch") {
            url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${id}`;
            quertPar = `/launches?limit=100&launch_success=${id}`;
            if(year !== "") {
                url = `${url}&launch_year=${year}`;
                quertPar = `${quertPar}&launch_year=${year}`;
            }
            if(land !=="") {
                url = `${url}&land_success=${land}`;
                quertPar = `${quertPar}&land_success=${land}`;
            }
            this.props.history.push(quertPar);
        } else if (filterkey==="land") {
            url = `https://api.spaceXdata.com/v3/launches?limit=100&land_success=${id}`;
            quertPar = `/launches?limit=100&land_success=${id}`;
            if(year !== "") {
                url = `${url}&launch_year=${year}`;
                quertPar = `${quertPar}&launch_year=${year}`;
            }
            if(launch !=="") {
                url = `${url}&launch_success=${launch}`;
                quertPar = `${quertPar}&launch_success=${launch}`;
            }
            this.props.history.push(quertPar);
        } else {
            url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true`;
            this.props.history.push(`/launches?limit=100&launch_success=true&land_success=true`);
        }
        
        //window.location.href = `${window.location.href}${url}`;
        // console.log(id, "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014")
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result,
                activeId: id
            });
            //console.log(result, '----')
            },
            (error) => {
            this.setState({
                isLoaded: true,
                activeId: id,
                error
            });
            }
        )
    }
    render() {
        const { items, activeId } = this.state;
        return (
            <React.Fragment>
                <div className="conatiner">
                    <Header />
                    <FilterBar activeId={activeId} history={this.props.history} onFilterClick={this.onFilterClick} />
                    <Details items={items}/>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Container);
