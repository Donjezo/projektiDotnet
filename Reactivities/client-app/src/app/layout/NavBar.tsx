import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface props{
    openForm: () => void;
}
export default function NavBar({ openForm}:props) {
    return (
        <Menu inverted fixed="top">
        
            <Container>
                <Menu.Item headPer>
                    <img src="/assets/logo.png" style={ {marginRight:10}} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button onClick={()=>(openForm) } positive content="Create Activity"/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}