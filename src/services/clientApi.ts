import axios, { AxiosResponse } from 'axios'
import { ClientData } from '@/types/types'
const BASE_URL: string = 'https://b-c-backend-1ab5b2194b82.herokuapp.com'

export const createClient = async (
  clientData: ClientData
): Promise<ClientData> => {
  try {
    const response: AxiosResponse<ClientData> = await axios.post(
      `${BASE_URL}/api/client/clients`,
      clientData
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error creating donation:', error)
    throw error
  }
}