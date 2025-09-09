import React, { useState } from 'react';
import { registerBiometric, removeBiometricCredential } from '../services/biometricAuth';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/BioMetricAuth.css';

const BiometricSetup = () => {
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { currentUser } = useAuth();
  const { translate } = useLanguage();

  const handleSetupBiometric = async () => {
    if (!currentUser) {
      setError(translate('You must be logged in to setup biometric authentication', 'يجب تسجيل الدخول لتمكين المصادقة البيومترية'));
      return;
    }

    setIsSettingUp(true);
    setError('');
    setSuccess(false);

    try {
      await registerBiometric(currentUser.email, currentUser.uid);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSettingUp(false);
    }
  };

  const handleRemoveBiometric = async () => {
    if (!currentUser) return;

    try {
      removeBiometricCredential(currentUser.uid);
      setSuccess(false);
      alert(translate('Biometric authentication removed!', 'تم إزالة المصادقة البيومترية!'));
    } catch (error) {
      setError(translate('Failed to remove biometric', 'فشل في إزالة المصادقة البيومترية'));
    }
  };

  if (success) {
    return (
      <div className="biometric-success">
        <i className="fas fa-check-circle"></i>
        <span>{translate('Biometric authentication is enabled', 'تم تمكين المصادقة البيومترية')}</span>
        <button 
          onClick={handleRemoveBiometric}
          className="btn btn-outline btn-sm"
        >
          {translate('Disable', 'تعطيل')}
        </button>
      </div>
    );
  }

  return (
    <div className="biometric-setup">
      <h4>{translate('Enable Biometric Login', 'تمكين تسجيل الدخول البيومتري')}</h4>
      <p>{translate('Use your fingerprint or face ID for faster login', 'استخدم بصمة الإصبع أو التعرف على الوجه لتسجيل دخول أسرع')}</p>
      
      {error && <div className="error-message">{error}</div>}
      
      <button 
        onClick={handleSetupBiometric} 
        disabled={isSettingUp}
        className="btn btn-biometric"
      >
        {isSettingUp ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            {translate('Setting up...', 'جاري الإعداد...')}
          </>
        ) : (
          <>
            <i className="fas fa-fingerprint"></i>
            {translate('Enable Biometric Login', 'تمكين تسجيل الدخول البيومتري')}
          </>
        )}
      </button>
    </div>
  );
};

export default BiometricSetup;