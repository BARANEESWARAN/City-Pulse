import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  isBiometricSupported, 
  authenticateBiometric, 
  hasBiometricCredential 
} from '../services/biometricAuth';
import '../styles/BioMetricAuth.css';

const BioMetricAuth = ({ onSuccess, onError }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { loginWithBiometric } = useAuth();
  const { translate } = useLanguage();

  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    try {
      const supported = isBiometricSupported();
      setIsSupported(supported);
      
      if (supported) {
      
        const hasCredentials = await checkForBiometricUsers();
        setIsAvailable(hasCredentials);
      }
    } catch (error) {
      console.error('Error checking biometric availability:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkForBiometricUsers = async () => {
   
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('biometric_')) {
        return true;
      }
    }
    return false;
  };

  const handleBiometricLogin = async () => {
    setIsLoading(true);
    if (onError) onError('');

    try {
    
      let biometricUserId = null;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('biometric_')) {
          biometricUserId = key.replace('biometric_', '');
          break;
        }
      }

      if (!biometricUserId) {
        throw new Error(translate('No biometric credentials found', 'لم يتم العثور على بيانات biometric'));
      }

      const result = await authenticateBiometric(biometricUserId);
      
      if (result.success) {
       
        await loginWithBiometric();
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error('Biometric login failed:', error);
      if (onError) onError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="biometric-loading">
        <i className="fas fa-spinner fa-spin"></i>
        {translate('Checking biometric options...', 'جاري التحقق من خيارات biometric...')}
      </div>
    );
  }

  if (!isSupported) {
    return (
      <div className="biometric-not-supported">
        <i className="fas fa-info-circle"></i>
        <p>{translate('Biometric authentication not supported', 'المصادقة البيومترية غير مدعومة')}</p>
      </div>
    );
  }

  if (!isAvailable) {
    return (
      <div className="biometric-not-available">
        <i className="fas fa-fingerprint"></i>
        <p>{translate('No biometric credentials found. Sign in first to enable.', 'لم يتم العثور على بيانات biometric. سجل الدخول أولاً لتمكينها.')}</p>
      </div>
    );
  }

  return (
    <div className="biometric-auth">
      <div className="or-divider">
        <span>{translate('Or', 'أو')}</span>
      </div>
      
      <button 
        onClick={handleBiometricLogin} 
        disabled={isLoading}
        className="btn btn-biometric"
      >
        {isLoading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            {translate('Verifying...', 'جاري التحقق...')}
          </>
        ) : (
          <>
            <i className="fas fa-fingerprint"></i>
            {translate('Login with Biometrics', 'تسجيل الدخول باستخدام البصمة')}
          </>
        )}
      </button>
    </div>
  );
};

export default BioMetricAuth;