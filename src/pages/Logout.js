

//컴포넌트인데 실제 컴포넌트가 없는 경우에는 반드시

import { redirect } from "react-router-dom";

//redirect코드가 필요
export const logouAction = () => {
    localStorage.removeItem('userData');
    return redirect('/');
};