import { Component } from "react";
import StashTileDisplay from "./StashTileDisplay";

export default class StashTileParent extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <StashTileDisplay></StashTileDisplay>
            </div>
        )
    }
}