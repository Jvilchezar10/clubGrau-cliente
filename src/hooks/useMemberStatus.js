// src/hooks/useMemberStatus.js
import { useState } from 'react';

const useMemberStatus = () => {
  const [isMember, setIsMember] = useState(true); // Inicializa en true para "SOCIO"

  const handleMemberClick = (memberStatus) => {
    setIsMember(memberStatus);
  };

  return {
    isMember,
    handleMemberClick,
  };
};

export default useMemberStatus;
