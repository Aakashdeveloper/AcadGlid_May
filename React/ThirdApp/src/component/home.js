import React, { Component } from 'react';

import Banner from './banner';
import ArtistList from './artists_list';

const URL_ARTISTS = 'http://localhost:7890/artists';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            artists:''
        }
    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList></ArtistList>
            </div>
        )
    }
}

export default Home;