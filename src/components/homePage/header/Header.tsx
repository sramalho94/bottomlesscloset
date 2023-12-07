import React from 'react';

import HomeBackgroundImage from './HomeBackgroundImage';
import DonateModal from './donationModal/DonateModal';
import HypeStatement from './HypeStatement';

function Header() {
    return (
        <div>
            <div className="relative flex flex-col items-center">
                <HomeBackgroundImage />
                <DonateModal />
            </div>

            <HypeStatement />
            
        </div>
    )
}

export default Header