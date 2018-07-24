import React, { Component } from 'react';
import ContractorCheckPage from '../../pages/ContractorCheckPage';
import HomeownerCheckPage from '../../pages/HomeownerCheckPage';
// import API from '../../utils/API';


class Spec extends Component {
    constructor() {
        super()

        this.state = {
            typeUser: sessionStorage.getItem('typeUser')
        }

    }     

    render() {
            
        switch (this.state.typeUser) {
    
            case 'Homeowner': 
                return <HomeownerCheckPage />
            case 'Service Provider': 
                return <ContractorCheckPage />
            default: return new Error("THE ROLE YOU PASSED HAS NOT BEEN CONFIGURED YET OR YOU DON'T HAVE THE PROPER PERMISSIONS");
        }       

    }

};

export default Spec;
    