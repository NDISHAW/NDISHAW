import React from 'react';
import { TOTAL_SCREENS } from '../utilities/commonUtis';

export default function PortfolioContainer() {
    const mapAllScreens = () => {
        return(
            TOTAL_SCREENS.map(screen)=> (
                (screen.component) ? <screen.component screenName={screen.screen_name}key={}
            )
        )
    }
  return (
    <div >
        
    </div>
  )
}
