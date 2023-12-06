import React from 'react';

import HomeBackgroundImage from './HomeBackgroundImage';
import GetInvolvedSection from './GetInvolvedSection';
import DonateModal from './DonateModal';

function Header() {
    return (
        <div>
            <div className="relative flex flex-col items-center">
                <HomeBackgroundImage />
                <DonateModal />
            </div>

            <GetInvolvedSection />
            {/* <div>
            </div> */}
        </div>
    )
}

export default Header