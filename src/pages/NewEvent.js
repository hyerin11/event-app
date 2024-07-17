import React, { useContext, useEffect } from 'react';
import EventForm from '../components/EventForm';
import EventContext from '../components/context/event-context';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';

const NewEvent = () => {

  const navigate = useNavigate();

  const {toatlEventCount} = useContext(EventContext);

  const {role} = useRouteLoaderData('user-data');

  //라우트 가드(권한, 갯수 검증)
  useEffect(()=> {
    if(role ==='COMMON' && toatlEventCount >= 4){
      alert('일반회원은 4개의 이벤트 생성만 가능합니다.');
      navigate('/events');
    }
  }, [toatlEventCount]);

  return <EventForm method="post" />;
};

export default NewEvent;

