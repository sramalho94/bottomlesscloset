// Example for reference
export interface PropsForComponentWithProps {
  header?: string //header is an optional prop, it is a string
  headerImages: string[] //headerImages is an array of strings, it is mandatory
  altText: string //altText can be either string or null, it is mandatory
}
export interface PropsForDonateModal {
  handleSubmit?: any
}
export interface PropsForDonateStep {
  setDonationStep?: any
}

// <ComponentWithProps headerImage={['./image1.svg','./image2.svg']} altText={null} />

export interface subheader {
  title: string;
  link?: string; // Make link optional
}

export interface navElement {
  title: string;
  subheaders: (string | subheader)[];
}

export interface navsProp {
  navs: navElement[]
}

export interface stepperControlProps {
  handleClick: (direction: 'back' | 'next') => void
  currentStep: number
  steps: string[]
}

export interface PropsForHelpCards {
  title: string
  body: string
}

export interface DonationData {
  donor_id: number
  initiative_id: number
  donationType: string
  donationValue: number
  inMemoriam: string
  comment: string
  orgMatchName: string
}
export interface ClientData {
    firstName: string
    lastName: string
    email: string
    borough: string
    service: Array<string>
    referralOrg: string
    clothesNeeded: Array<string>
}
