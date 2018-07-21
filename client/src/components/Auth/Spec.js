import React, { Component } from 'react';
import ContractorCheckPage from '../../pages/ContractorCheckPage';
import HomeownerCheckPage from '../../pages/HomeownerCheckPage';
import API from '../../utils/API';


class Spec extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        API.getUser()
            .then(res => console.log(res))
            .catch(error => console.log(error)); 
    }

    render() {
        switch (this.state.user.typeUser) {
            case 'Homeowner': 
                return <HomeownerCheckPage role="HOMEOWNER" />
                break;
            case 'Service Provider': 
                return <ContractorCheckPage role="SERVICE_PROVIDER" />
                break;
            default: return new Error("THE ROLE YOU PASSED HAS NOT BEEN CONFIGURED YET OR YOU DON'T HAVE THE PROPER PERMISSIONS");
        }

    }

};

export default Spec;
    