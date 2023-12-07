import axios, { AxiosResponse } from 'axios'
import { DonationData } from '@/types/types'
const BASE_URL: string = 'https://b-c-backend-1ab5b2194b82.herokuapp.com' // Replace with your actual API URL

export const createDonation = async (
  donationData: DonationData
): Promise<DonationData> => {
  try {
    const response: AxiosResponse<DonationData> = await axios.post(
      `${BASE_URL}/api/donation`,
      donationData
    )
    return response.data
  } catch (error) {
    console.error('Error creating donation:', error)
    throw error
  }
}
