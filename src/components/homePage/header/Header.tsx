import React from 'react';

import HomeBackgroundImage from './HomeBackgroundImage';
import DonateModal from './donationModal/DonateModal';

function Header() {
    return (
        <div>
            <div className="relative flex flex-col items-center">
                <HomeBackgroundImage />
                <DonateModal />
            </div>

            
        </div>
    )
}

export default Header