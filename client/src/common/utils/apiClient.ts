import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = '';

const axiosInstance = axios.create({
    baseURL,
});

export interface ApiClient extends AxiosInstance {
    get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export const apiClient: ApiClient = axiosInstance;

apiClient.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => {
        if (error.response) {
            console.error('잘못된 응답이 왔습니다.');
        } else if (error.request) {
            console.error('요청은 완료했으나, 서버로부터 응답을 받지 못했습니다.');
        } else {
            console.error('서버로부터 응답이 없습니다.');
        }
        throw error;
    }
);
