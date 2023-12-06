// Example for reference
export interface PropsForComponentWithProps {
  header?: string //header is an optional prop, it is a string
  headerImages: string[] //headerImages is an array of strings, it is mandatory
  altText: string //altText can be either string or null, it is mandatory
}
export interface PropsForDonateModal {
  handleSubmit?: any
}
// <ComponentWithProps headerImage={['./image1.svg','./image2.svg']} altText={null} />
