/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware } from "@reduxjs/toolkit";

const longer: Middleware = (state) => (next) => (action: any) => {
  console.group(action.type); // action টা হইলো increment | decrement সেট এখানে আসতেছে ।
  console.info("Prv. State", state.getState()); // present state কি সেটা এখানে বলা হচ্ছে ।
  const result = next(action); // update state , next কে call করে আমি পরের ধাপ এ পাঠায় দিতেছি ।
  console.info("Next State", state.getState()); // present state টা আবার পেয়ে যাচ্ছি ।
  console.groupEnd();
  return result;
};

export default longer;
