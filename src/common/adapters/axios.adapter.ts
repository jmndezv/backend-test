import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      return (await this.axios.get<T>(url)).data;
    } catch (error) {
      console.error(`Error fetching data from URL: ${url}`, error);
      throw new Error(`Error fetching data from URL: ${url}`);
    }
  }
}
