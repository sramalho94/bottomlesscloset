import React from 'react';

import HomeBackgroundImage from './HomeBackgroundImage';
import GetInvolvedSection from './GetInvolvedSection';
import DonateModal from './DonateModal';

function Header() {
    return (
        <div className="relative">
            <HomeBackgroundImage />

            <GetInvolvedSection />
            <div>
                {/* <DonateModal /> */}
            </div>
        </div>
    )
}

export default Header