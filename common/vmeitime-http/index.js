import http from "./interface";
import { config } from "../../config";
import { authStore } from "@/store/auth";
import { _ } from "../../src/utils/lodash";

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 *
 */

http.interceptor.request = config => {
  console.log("Req ==>:", config.url);
  if (!global.requestStart) global.requestStart = {};
  global.requestStart[config.requestId] = new Date();
  const token = authStore.token;
  if (token) {
    config.header = {
      Authorization: `Bearer ${token}`
    };
  }

  return config;
};

http.interceptor.response = response => {
  const duration = new Date() - global.requestStart[response.config.requestId];
  console.log(`Res <== (${duration}ms):`, response.config.url, response);
  //判断返回状态 执行相应操作
  if (!response.statusCode) {
    uni.showToast({
      icon: "none",
      duration: 3000,
      title: "网络连接错误"
    });
  } else if (response.statusCode !== 200) {
    uni.showToast({
      icon: "none",
      duration: 3000,
      title: _.get(response, "data.message") || "系统繁忙，请稍后重试"
    });
  }
  return response;
};

export const getAuthUser = () => {
  return http.request({
    url: `/auth/user`,
    method: "GET",
    dataType: "json"
  });
};

export const wechatLogin = ({ code }) => {
  return http.request({
    url: `/wechat/login`,
    method: "POST",
    dataType: "json",
    data: {
      code
    }
  });
};

export const wechatSignup = ({ session_key, encryptedData, iv }) => {
  return http.request({
    url: `/wechat/signup`,
    method: "POST",
    dataType: "json",
    data: { session_key, encryptedData, iv }
  });
};

export const wechatDecrypt = ({ session_key, encryptedData, iv }) => {
  return http.request({
    url: `/wechat/decrypt`,
    method: "POST",
    dataType: "json",
    data: {
      session_key,
      encryptedData,
      iv
    }
  });
};

export const getConfigs = () => {
  return http.request({
    url: `/config`,
    method: "GET",
    dataType: "json"
  });
};

export const getList = ({ type, data } = {}) => {
  data = _.omitBy(data, _.isNil);
  return http.request({
    url: `/${type}`,
    method: "GET",
    dataType: "json",
    data
  });
};
export const getItem = ({ id, type }) => {
  return http.request({
    url: `/${type}/${id}`,
    method: "GET",
    dataType: "json"
  });
};

export const updateMobile = ({ session_key, encryptedData, iv, openid }) => {
  return http.request({
    url: `/wechat/update-mobile`,
    method: "POST",
    dataType: "json",
    data: {
      session_key,
      encryptedData,
      iv,
      openid
    }
  });
};

export const handleItem = ({ type, id, data, method = "POST" }) => {
  return http.request({
    url: `/${type}/${id}`,
    method,
    dataType: "json",
    data
  });
};

export const createBooking = ({ store, date, type = "play", paymentGateway = "wechatpay", projects, checkInAt, useBalance }) => {
  const data = _.omitBy({ store, date, type, projects, checkInAt }, _.isNil);
  return http.request({
    url: `/booking?paymentGateway=${paymentGateway}&useBalance=${useBalance}`,
    method: "POST",
    dataType: "json",
    data
  });
};

export const getBookingPrice = ({ store, date, type = "play", projects, checkInAt }) => {
  const data = _.omitBy({ store, date, type, projects, checkInAt }, _.isNil);
  return http.request({
    url: `/booking-price`,
    method: "POST",
    dataType: "json",
    data
  });
};

export const joinBooking = ({ code, preview }) => {
  const data = _.omitBy({ code, preview }, _.isNil);
  return http.request({
    url: `/booking-join`,
    method: "POST",
    dataType: "json",
    data
  });
};

export const getStoreCheckInTimeOptions = ({ storeId, date }) => {
  return http.request({
    url: `/store/${storeId}/check-in-time-options/${date}`,
    method: "GET"
  });
};

export const handleType = ({ type, data, method = "POST" }) => {
  return http.request({
    url: `/${type}`,
    method,
    dataType: "json",
    data
  });
};
