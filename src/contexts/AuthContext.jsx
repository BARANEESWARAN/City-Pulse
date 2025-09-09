// // import React, { createContext, useContext, useState, useEffect } from 'react';
// // import { 
// //   createUserWithEmailAndPassword, 
// //   signInWithEmailAndPassword, 
// //   signOut,
// //   onAuthStateChanged,
// //   updateProfile,
// //   sendPasswordResetEmail
// // } from 'firebase/auth';
// // import { auth } from '../config/firebase';

// // const AuthContext = createContext();

// // export function useAuth() {
// //   return useContext(AuthContext);
// // }

// // export function AuthProvider({ children }) {
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   function signup(email, password) {
// //     return createUserWithEmailAndPassword(auth, email, password);
// //   }

// //   function login(email, password) {
// //     return signInWithEmailAndPassword(auth, email, password);
// //   }

// //   function logout() {
// //     return signOut(auth);
// //   }

// //   function resetPassword(email) {
// //     return sendPasswordResetEmail(auth, email);
// //   }

// //   function updateUserProfile(profileData) {
// //     return updateProfile(auth.currentUser, profileData);
// //   }

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setCurrentUser(user);
// //       setLoading(false);
// //     });

// //     return unsubscribe;
// //   }, []);

// //   const value = {
// //     currentUser,
// //     signup,
// //     login,
// //     logout,
// //     resetPassword,
// //     updateUserProfile
// //   };

// //   return (
// //     <AuthContext.Provider value={value}>
// //       {!loading && children}
// //     </AuthContext.Provider>
// //   );
// // }

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signOut, 
//   updateProfile,
//   onAuthStateChanged,
//   setPersistence,
//   browserLocalPersistence,
//   getAuth
// } from 'firebase/auth';
// import app from '../config/firebase'; // Import default export

// // Create auth instance locally
// const auth = getAuth(app);

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       if (user) {
//         localStorage.setItem('currentUserId', user.uid);
//       } else {
//         localStorage.removeItem('currentUserId');
//       }
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   // Sign up function
//   const signup = async (email, password, displayName) => {
//     try {
//       await setPersistence(auth, browserLocalPersistence);
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
//       if (displayName) {
//         await updateProfile(userCredential.user, { displayName });
//       }
      
//       return userCredential;
//     } catch (error) {
//       throw error;
//     }
//   };

//   // Login function
//   const login = async (email, password) => {
//     try {
//       await setPersistence(auth, browserLocalPersistence);
//       return await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       throw error;
//     }
//   };

//   // Biometric login function
//   const loginWithBiometric = async () => {
//     try {
//       // For demo purposes, we'll create a mock user
//       const mockUser = {
//         uid: 'demo-biometric-user',
//         email: 'biometric@example.com',
//         displayName: 'Biometric User',
//         emailVerified: false,
//         isAnonymous: false,
//         metadata: {},
//         providerData: [],
//         refreshToken: '',
//         tenantId: null
//       };
      
//       // Store mock user in localStorage for demo
//       localStorage.setItem('currentUserId', mockUser.uid);
//       setCurrentUser(mockUser);
      
//       return mockUser;
//     } catch (error) {
//       console.error('Biometric login failed:', error);
//       throw new Error('Biometric authentication failed');
//     }
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem('currentUserId');
//     return signOut(auth);
//   };

//   // Update profile function
//   const updateUserProfile = async (profileData) => {
//     if (!auth.currentUser) throw new Error('No user logged in');
    
//     try {
//       await updateProfile(auth.currentUser, profileData);
      
//       // Update local state to reflect changes
//       if (currentUser) {
//         setCurrentUser({
//           ...currentUser,
//           displayName: profileData.displayName || currentUser.displayName,
//           photoURL: profileData.photoURL || currentUser.photoURL
//         });
//       }
//     } catch (error) {
//       throw error;
//     }
//   };

//   const value = {
//     currentUser,
//     signup,
//     login,
//     loginWithBiometric,
//     logout,
//     updateUserProfile
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMockUser, setIsMockUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Real Firebase user
        setCurrentUser(user);
        setIsMockUser(false);
        localStorage.setItem('currentUserId', user.uid);
      } else {
        // Check if we have a mock user
        const mockUserId = localStorage.getItem('currentUserId');
        if (mockUserId && mockUserId.startsWith('demo-biometric-user')) {
          // This is a mock user from biometric login
          const mockUser = {
            uid: mockUserId,
            email: 'biometric@example.com',
            displayName: 'Biometric User',
            emailVerified: false,
            isAnonymous: false,
            metadata: {},
            providerData: [],
            refreshToken: '',
            tenantId: null
          };
          setCurrentUser(mockUser);
          setIsMockUser(true);
        } else {
          // No user logged in
          setCurrentUser(null);
          setIsMockUser(false);
          localStorage.removeItem('currentUserId');
        }
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Sign up function
  const signup = async (email, password, displayName) => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }
      
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  // Biometric login function - UPDATED
  const loginWithBiometric = async () => {
    try {
      // Create a mock user with unique ID
      const mockUser = {
        uid: `demo-biometric-user-${Date.now()}`,
        email: 'biometric@example.com',
        displayName: 'Biometric User',
        emailVerified: false,
        isAnonymous: false,
        metadata: {},
        providerData: [],
        refreshToken: '',
        tenantId: null
      };
      
      // Store mock user in localStorage
      localStorage.setItem('currentUserId', mockUser.uid);
      setCurrentUser(mockUser);
      setIsMockUser(true);
      
      return mockUser;
    } catch (error) {
      console.error('Biometric login failed:', error);
      throw new Error('Biometric authentication failed');
    }
  };

  // Logout function - UPDATED
  const logout = () => {
    localStorage.removeItem('currentUserId');
    if (isMockUser) {
      // For mock users, just clear the state
      setCurrentUser(null);
      setIsMockUser(false);
      return Promise.resolve();
    } else {
      // For real Firebase users, sign out properly
      return signOut(auth);
    }
  };

  // Update profile function - UPDATED
  const updateUserProfile = async (profileData) => {
    if (!currentUser) throw new Error('No user logged in');
    
    if (isMockUser) {
      // For mock users, update the local state only
      setCurrentUser({
        ...currentUser,
        displayName: profileData.displayName || currentUser.displayName,
        photoURL: profileData.photoURL || currentUser.photoURL
      });
      return Promise.resolve();
    } else {
      // For real Firebase users, update through Firebase
      try {
        await updateProfile(auth.currentUser, profileData);
        // Update local state to reflect changes
        setCurrentUser({
          ...currentUser,
          displayName: profileData.displayName || currentUser.displayName,
          photoURL: profileData.photoURL || currentUser.photoURL
        });
      } catch (error) {
        throw error;
      }
    }
  };

  const value = {
    currentUser,
    isMockUser, // Export this to check if user is mock
    signup,
    login,
    loginWithBiometric,
    logout,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};