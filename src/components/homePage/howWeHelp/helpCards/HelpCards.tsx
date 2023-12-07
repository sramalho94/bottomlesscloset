import React from 'react'

import Card from './Card'

function HelpCards() {
    return (
        <div className="flex flex-col lg:flex-row ">
            <Card 
                title="Dress for Success" 
                body="Choose stylish work clothes, shoes, and accessories for a great first impression." 
            />
            <Card 
                title="Resume Remix" 
                body="Fix your resume with our real-time experts, then walk away with printed copies and a flash drive!" 
            />
            <Card 
                title="Interview Mastery" 
                body="Conduct full mock interviews with a coach, covering everything from handshakes to acing tough questions." 
            />
        </div>
    )
}

export default HelpCards