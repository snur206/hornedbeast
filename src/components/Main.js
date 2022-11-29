import React from "react";
import HornedBeast from "./HornedBeasts";
class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeast
                    title="ram"
                    description="three rams walking"
                    imgurl="https://images.unsplash.com/photo-1507668534048-612633783b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                />

                <HornedBeast
                    title="moose"
                    description="moose sitting"
                    imgurl="https://images.unsplash.com/photo-1582002834723-2256d33da100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                />
            </>

        )
    }
}         

export default Main;