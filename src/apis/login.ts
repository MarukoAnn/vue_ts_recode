import httpService, { IDataWithError } from '../utils/http/axios'

// eslint-disable-next-line import/prefer-default-export
export function login(param: any = {}): Promise<IDataWithError<any>> {
  return httpService.post('/api/login', param)
}
