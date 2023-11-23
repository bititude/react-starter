import axiosClient from '..';
import { LoginRequestDto } from './dto/request/LoginRequest.dto';
import { LoginResponseDto } from './dto/response/LoginResponse.dto';

export const logIn = (data: LoginRequestDto) =>
  axiosClient.post<LoginResponseDto>('/auth/login', data, {
    withCredentials: true,
  });
