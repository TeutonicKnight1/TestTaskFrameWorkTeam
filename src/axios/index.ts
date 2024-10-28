import axios from 'axios';
import { MetaData } from '../types';

const instance = axios.create({
  baseURL: 'https://test-front.framework.team',
  timeout: 5000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
  },
});

export async function getMetaData(): Promise<MetaData> {
  try {
    const response = await instance.get('/paintings');
    const metaData: MetaData = {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      meta: response.data.meta,
    };
    return metaData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
