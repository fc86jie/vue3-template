/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-22 10:10:01
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-22 10:10:01
 * @FilePath: \src\api\index.ts
 * @Description:
 */
import * as login from './module/login';
import * as index from './module/index';

export default Object.assign({}, login, index);
