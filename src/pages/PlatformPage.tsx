import React from 'react';
import { Platform } from '../components/platform/Platform';
import { PlatformProvider } from '../context/PlatformContext';
import { useNavigate } from 'react-router-dom';

export const PlatformPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PlatformProvider>
      <Platform onExit={() => navigate('/')} />
    </PlatformProvider>
  );
};